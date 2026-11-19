import subprocess
import os
import imageio_ffmpeg

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
out_dir = r"d:/App development/qubit/frontend/public/videos"
os.makedirs(out_dir, exist_ok=True)

configs = [
    {
        "name": "qubit_core.mp4",
        "in": r"C:/Users/acer/.gemini/antigravity/brain/b0f1ea33-b53b-4bea-a0da-7745e3a64a31/.user_uploaded/media_1795102353022_cc7dcf95.mp4",
        "t": "14",
        "vf": "scale=405:720,pad=1280:720:(1280-405)/2:0:black,format=yuv420p"
    },
    {
        "name": "qubit_interface.mp4",
        "in": r"C:/Users/acer/.gemini/antigravity/brain/b0f1ea33-b53b-4bea-a0da-7745e3a64a31/.user_uploaded/media_1795102353035_b78067b5.mp4",
        "t": "14",
        "vf": "transpose=2,scale=1280:720,format=yuv420p"
    },
    {
        "name": "qubit_matrix.mp4",
        "in": r"C:/Users/acer/.gemini/antigravity/brain/b0f1ea33-b53b-4bea-a0da-7745e3a64a31/.user_uploaded/media_1795102353067_a9bf6f19.mp4",
        "t": "8.5",
        "vf": "scale=410:720,pad=1280:720:(1280-410)/2:0:black,format=yuv420p"
    },
    {
        "name": "qubit_quantum.mp4",
        "in": r"C:/Users/acer/.gemini/antigravity/brain/b0f1ea33-b53b-4bea-a0da-7745e3a64a31/.user_uploaded/media_1795102353092_263622b6.mp4",
        "t": "14",
        "vf": "pad=1280:720:(1280-720)/2:0:black,format=yuv420p"
    }
]

for idx, c in enumerate(configs):
    out_path = os.path.join(out_dir, c["name"])
    cmd = [
        ffmpeg, "-y",
        "-ss", "00:00:00",
        "-t", c["t"],
        "-i", c["in"],
        "-vf", c["vf"],
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "20",
        "-c:a", "aac",
        "-b:a", "128k",
        "-movflags", "+faststart",
        out_path
    ]
    print(f"Processing video {idx+1}: {c['name']}...")
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if res.returncode == 0:
        size_kb = os.path.getsize(out_path) / 1024
        print(f"-> Success: {c['name']} ({size_kb:.1f} KB)")
    else:
        print(f"-> Error: {res.stderr[-300:]}")

print("All video conversions completed!")

