const SENT_STORAGE_KEY = 'qubit_consultation_sent';

export function getConsultationSent() {
  try {
    return sessionStorage.getItem(SENT_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setConsultationSent() {
  try {
    sessionStorage.setItem(SENT_STORAGE_KEY, 'true');
  } catch {
    // Ignore storage errors in restricted contexts
  }
}

export function clearConsultationSent() {
  try {
    sessionStorage.removeItem(SENT_STORAGE_KEY);
  } catch {
    // Ignore storage errors in restricted contexts
  }
}

