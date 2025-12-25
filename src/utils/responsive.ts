import React from "react";

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
};

export const isMobile = () => {
    return window.innerWidth <= 768;
};

export const isTablet = () => {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
};

export const isDesktop = () => {
    return window.innerWidth > 1024;
};