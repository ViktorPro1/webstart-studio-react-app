declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
    }
}

export const initGoogleAnalytics = (): void => {
    const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;

    if (!measurementId) {
        console.warn('GA Measurement ID not found');
        return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]): void {
        window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', measurementId, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
    });
};

export const trackPageView = (url: string): void => {
    if (window.gtag) {
        window.gtag('config', import.meta.env.VITE_GA4_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

export const trackEvent = (eventName: string, params: Record<string, unknown> = {}): void => {
    if (window.gtag) {
        window.gtag('event', eventName, params);
    }
};