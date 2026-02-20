declare global {
    interface Window {
        clarity?: {
            (...args: unknown[]): void;
            q?: unknown[];
        };
    }
}

export const initClarity = (): void => {
    const clarityId = import.meta.env.VITE_CLARITY_ID;

    if (!clarityId) {
        console.warn('Clarity ID not found');
        return;
    }

    // Створюємо функцію-обробник черги
    const clarityFunc = (...args: unknown[]) => {
        const c = window.clarity;
        if (c) {
            c.q = c.q || [];
            c.q.push(args);
        }
    };

    // Ініціалізуємо чергу, якщо її ще немає
    clarityFunc.q = window.clarity?.q || [];
    window.clarity = clarityFunc;

    const doc = document;
    const scriptTag = "script" as const;
    const t = doc.createElement(scriptTag);
    t.async = true;
    t.src = `https://www.clarity.ms/tag/${clarityId}`;

    const firstScript = doc.getElementsByTagName(scriptTag)[0];
    if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(t, firstScript);
    }
};