declare global {
  interface WindowEventMap {
    'swUpdate': CustomEvent<ServiceWorkerRegistration>;
  }
}

export {};
