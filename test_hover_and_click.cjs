const fs = require('fs');
const http = require('http');
const { spawn } = require('child_process');
const path = require('path');

const PORT = 9398;
const USER_DATA_DIR = path.join(process.env.TEMP || 'C:\\Temp', 'edge_dropdown_test_' + Date.now());

const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];

let edgePath = edgePaths.find(p => fs.existsSync(p));
if (!edgePath) {
  console.error('Edge not found');
  process.exit(1);
}

const edgeProcess = spawn(edgePath, [
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${USER_DATA_DIR}`,
  '--headless=new',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  '--window-size=1440,900',
  '--disable-sync',
  'about:blank'
]);

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 1;
    this.callbacks = new Map();
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const { res, rej } = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) rej(msg.error);
          else res(msg.result);
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((res, rej) => {
      const msgId = this.id++;
      this.callbacks.set(msgId, { res, rej });
      this.ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function run() {
  await wait(1500);
  try {
    const targets = await getJson(`http://127.0.0.1:${PORT}/json`);
    let target = targets.find(t => t.type === 'page');
    const client = new CDPClient(target.webSocketDebuggerUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('DOM.enable');
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    await client.send('Page.navigate', { url: 'http://127.0.0.1:3000/' });
    await wait(2500);

    // Get position of "What we do" button
    const evalBtn = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const btn = buttons.find(b => b.innerText.includes('What we do'));
        if (!btn) return null;
        const rect = btn.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, top: rect.top, bottom: rect.bottom };
      })()`,
      returnByValue: true
    });

    const btnPos = evalBtn.result.value;
    console.log('Button position:', btnPos);

    // Move mouse over button
    await client.send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: btnPos.x,
      y: btnPos.y
    });
    await wait(300);

    // Now move mouse down into the gap area (e.g. y = btnPos.bottom + 6)
    await client.send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: btnPos.x,
      y: btnPos.bottom + 6
    });
    await wait(300);

    // Check if dropdown is still visible
    const checkGapVisibility = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const megaMenu = document.querySelector('div[class*="w-[960px]"]');
        if (!megaMenu) return { error: 'No megaMenu' };
        const style = window.getComputedStyle(megaMenu);
        return {
          opacity: style.opacity,
          pointerEvents: style.pointerEvents,
          visibility: style.visibility
        };
      })()`,
      returnByValue: true
    });
    console.log('Visibility while cursor is in gap:', checkGapVisibility.result.value);

    // Now move mouse down into the first service item ("Corporate Website Design")
    const evalServiceItem = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const links = Array.from(document.querySelectorAll('a'));
        const link = links.find(a => a.innerText.includes('Corporate Website Design'));
        if (!link) return null;
        const rect = link.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      })()`,
      returnByValue: true
    });

    const itemPos = evalServiceItem.result.value;
    console.log('Item position:', itemPos);

    await client.send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: itemPos.x,
      y: itemPos.y
    });
    await wait(400);

    // Take screenshot while hovering over dropdown item
    const artifactDir = 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\b0f1ea33-b53b-4bea-a0da-7745e3a64a31';
    const screenshot = await client.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'dropdown_hover_working.png'), Buffer.from(screenshot.data, 'base64'));
    console.log('Saved hover screenshot to dropdown_hover_working.png');

    // Click on the service item
    await client.send('Input.dispatchMouseEvent', {
      type: 'mousePressed',
      x: itemPos.x,
      y: itemPos.y,
      button: 'left',
      clickCount: 1
    });
    await client.send('Input.dispatchMouseEvent', {
      type: 'mouseReleased',
      x: itemPos.x,
      y: itemPos.y,
      button: 'left',
      clickCount: 1
    });
    await wait(1500);

    const checkNav = await client.send('Runtime.evaluate', {
      expression: `window.location.pathname`,
      returnByValue: true
    });
    console.log('Pathname after click:', checkNav.result.value);

    client.close();
  } catch (err) {
    console.error('Error during test:', err);
  } finally {
    edgeProcess.kill();
    try {
      fs.rmSync(USER_DATA_DIR, { recursive: true, force: true });
    } catch (e) {}
  }
}

run();

