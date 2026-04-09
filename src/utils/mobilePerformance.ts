// Mobile Performance Utilities
// Detect if device is mobile or low-bandwidth
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

// Detect connection speed
export const getConnectionSpeed = (): 'fast' | 'slow' | 'unknown' => {
  if ('connection' in navigator) {
    const conn = (navigator as any).connection;
    if (conn) {
      const effectiveType = conn.effectiveType;
      if (effectiveType === '4g') return 'fast';
      if (effectiveType === '3g' || effectiveType === '2g') return 'slow';
    }
  }
  return 'unknown';
};

// Reduce animation intensity on mobile
export const reduceMotionOnMobile = (): boolean => {
  if (!isMobileDevice()) return false;
  
  // Check if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return true;
  }
  
  // Reduce motion on low-bandwidth connections
  if (getConnectionSpeed() === 'slow') {
    return true;
  }
  
  return false;
};

// Lazy load images with intersection observer
export const useLazyLoadImages = () => {
  if (typeof window === 'undefined') return;
  
  // Only on mobile and slow connections
  if (!isMobileDevice() || getConnectionSpeed() !== 'slow') {
    return;
  }

  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px',
    });

    images.forEach((img) => imageObserver.observe(img));
  }
};

// Optimize touch responsiveness
export const usePassiveEventListener = (
  element: HTMLElement | null,
  event: string,
  handler: EventListener
) => {
  if (!element) return;
  
  element.addEventListener(event, handler, { passive: true });
  
  return () => {
    element.removeEventListener(event, handler);
  };
};

// Request idle callback with fallback
export const requestIdleCallbackPolyfill = (cb: () => void) => {
  if ('requestIdleCallback' in window) {
    return (window as any).requestIdleCallback(cb);
  }
  
  // Fallback for browsers that don't support requestIdleCallback
  return setTimeout(cb, 1);
};
