import { useState, useEffect, useCallback } from 'react';

const BACKEND_URL = import.meta.env.VITE_API_URL || 'https://webstart-studio-react-app-production.up.railway.app/';
const CHECK_INTERVAL = 30000;
const TIMEOUT = 5000;
const IS_DEV = import.meta.env.DEV;

export type BackendStatus = 'checking' | 'online' | 'offline';

let globalStatus: BackendStatus = 'checking';
const listeners = new Set<(status: BackendStatus) => void>();

function notifyListeners(status: BackendStatus) {
  globalStatus = status;
  listeners.forEach(fn => fn(status));
}

async function checkBackend(): Promise<void> {
  if (IS_DEV) {
    notifyListeners('online');
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    const res = await fetch(`${BACKEND_URL}/api/health`, {
      signal: controller.signal,
      cache: 'no-store',
    });
    clearTimeout(timer);
    notifyListeners(res.ok ? 'online' : 'offline');
  } catch {
    clearTimeout(timer);
    notifyListeners('offline');
  }
}

// Singleton — один інтервал на весь застосунок
let intervalId: ReturnType<typeof setInterval> | null = null;

function startMonitoring() {
  if (intervalId !== null) return;
  checkBackend();
  intervalId = setInterval(checkBackend, CHECK_INTERVAL);
}

export function useBackendStatus(): BackendStatus {
  const [status, setStatus] = useState<BackendStatus>(globalStatus);

  const handleChange = useCallback((s: BackendStatus) => setStatus(s), []);

  useEffect(() => {
    listeners.add(handleChange);
    startMonitoring();
    return () => {
      listeners.delete(handleChange);
    };
  }, [handleChange]);

  return status;
}