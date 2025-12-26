export const initClarity = (): void => {
    const clarityId = import.meta.env.VITE_CLARITY_ID;

    if (!clarityId) {
        console.warn('Clarity ID not found');
        return;
    }

    (function (c: any, l: Document, a: string, r: string, i: string) {
        c[a] = c[a] || function (...args: any[]) {
            (c[a].q = c[a].q || []).push(args);
        };
        const t = l.createElement(r) as HTMLScriptElement;
        t.async = true;
        t.src = "https://www.clarity.ms/tag/" + i;
        const y = l.getElementsByTagName(r)[0];
        y.parentNode!.insertBefore(t, y);
    })(window, document, "clarity", "script", clarityId);
};