export const initGoogleAnalytics = () => {
    const measurementId = process.env.REACT_APP_GA4_MEASUREMENT_ID;

    if (!measurementId) {
        console.warn('GA Measurement ID not found');
        return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', measurementId, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
    });
};

export const trackPageView = (url) => {
    if (window.gtag) {
        window.gtag('config', process.env.REACT_APP_GA4_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

export const trackEvent = (eventName, params = {}) => {
    if (window.gtag) {
        window.gtag('event', eventName, params);
    }
};