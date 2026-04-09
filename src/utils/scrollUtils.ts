import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ScrollOptions {
  offset?: number;
  behavior?: 'smooth' | 'instant' | 'auto';
  delay?: number;
}

interface UseScrollToSectionOptions extends ScrollOptions {
  sectionRoutes?: string[];
  preserveScroll?: boolean;
}

interface UseScrollNavigationOptions {
  scrollToSection?: boolean;
  scrollOptions?: ScrollOptions;
}

/**
 * Custom hook to handle scroll behavior for section navigation
 * Only scrolls when explicitly requested via navigation
 */
export const useScrollToSection = (options: UseScrollToSectionOptions = {}) => {
  const { pathname } = useLocation();
  const {
    sectionRoutes = ['/services', '/portfolio', '/pricing', '/testimonials', '/contact'],
    preserveScroll = true,
    offset = 80,
    behavior = 'smooth',
    delay = 200
  } = options;

  useEffect(() => {
    if (sectionRoutes.includes(pathname)) {
      const shouldScroll = !preserveScroll || sessionStorage.getItem('scrollToSection') === 'true';

      if (shouldScroll) {
        // Clear the flag
        sessionStorage.removeItem('scrollToSection');

        const scrollToSection = () => {
          const id = pathname.replace('/', '');
          const element = document.getElementById(id);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior
            });
          } else {
            // Retry after a short delay if element not found
            setTimeout(scrollToSection, 50);
          }
        };

        setTimeout(scrollToSection, delay);
      }
      // If shouldScroll is false, preserve current scroll position
    } else {
      // For non-section routes, scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, sectionRoutes, preserveScroll, offset, behavior, delay]);
};

/**
 * Custom hook for navigation with optional scroll behavior
 */
export const useScrollNavigation = (options: UseScrollNavigationOptions = {}) => {
  const navigate = useNavigate();
  const { scrollToSection = false, scrollOptions = {} } = options;

  const navigateWithScroll = (path: string) => {
    if (scrollToSection) {
      sessionStorage.setItem('scrollToSection', 'true');
    }
    navigate(path);
  };

  const navigateWithoutScroll = (path: string) => {
    sessionStorage.removeItem('scrollToSection');
    navigate(path);
  };

  return {
    navigateWithScroll,
    navigateWithoutScroll,
    navigate // Original navigate function
  };
};

/**
 * Custom smooth scroll function for better performance
 */
const smoothScrollTo = (targetY: number, duration: number = 300) => {
  const startY = window.pageYOffset;
  const difference = targetY - startY;
  const startTime = performance.now();

  const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const scroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startY + difference * easeInOutQuad(progress));

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

/**
 * Utility function to scroll to a specific element by ID with optimized performance
 */
export const scrollToElement = (
  elementId: string,
  options: ScrollOptions = {}
): boolean => {
  const { offset = 80, behavior = 'smooth', delay = 0 } = options;

  const scroll = () => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      if (behavior === 'instant') {
        window.scrollTo(0, offsetPosition);
      } else if (behavior === 'smooth') {
        // Use custom smooth scroll for better performance (300ms duration)
        smoothScrollTo(offsetPosition, 300);
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior
        });
      }
      return true;
    }
    return false;
  };

  if (delay > 0) {
    setTimeout(scroll, delay);
    return true;
  } else {
    return scroll();
  }
};

/**
 * Utility function to preserve current scroll position
 */
export const preserveScrollPosition = (): void => {
  sessionStorage.removeItem('scrollToSection');
};

/**
 * Utility function to enable scroll to section for next navigation
 */
export const enableScrollToSection = (): void => {
  sessionStorage.setItem('scrollToSection', 'true');
};