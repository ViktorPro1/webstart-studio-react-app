// Головний файл експорту для SEO-модулів.
// Об'єднує та експортує компоненти, конфігурацію SEO, типи та утиліти,
// щоб інші частини проекту могли імпортувати все з однієї точки.


// компоненти
export { default as SEO } from './SEO';
export { getMetaTags } from './MetaTags';
export { default as DynamicMeta } from './DynamicMeta';

// seoData
export { SEO_CONFIG } from './seoData';
export { getAllRoutes } from './seoData';
export type { PageSEO } from './seoData';

// utils
export * from './utils';
