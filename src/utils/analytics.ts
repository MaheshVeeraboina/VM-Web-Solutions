export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && 'gtag' in window && import.meta.env.PROD) {
    (window as any).gtag('event', eventName, params);
  }
};
