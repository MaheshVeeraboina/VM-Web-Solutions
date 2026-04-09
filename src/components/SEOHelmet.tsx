import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
}

const updateMeta = (
  selector: string,
  tagName: string,
  attributes: Record<string, string>
) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement(tagName);
    Object.entries(attributes).forEach(([key, value]) => {
      (element as HTMLElement).setAttribute(key, value);
    });
    document.head.appendChild(element);
  } else {
    Object.entries(attributes).forEach(([key, value]) => {
      (element as HTMLElement).setAttribute(key, value);
    });
  }
};

export const SEOHelmet: React.FC<SEOProps> = ({ title, description, image, children }) => {
  useEffect(() => {
    const fullTitle = `${title} | VM Web Solutions`;
    document.title = fullTitle;

    const maxLength = 155;
    const defaultDescription = 'Hyderabad website design for local businesses, gyms, coaching centers, and real estate. Fast mobile-first sites with local SEO and WhatsApp lead capture.';
    let metaDescription = description?.trim() || defaultDescription;
    if (metaDescription.length > maxLength) {
      metaDescription = `${metaDescription.slice(0, maxLength - 1).trim()}…`;
    }

    const currentUrl = `${window.location.origin}${window.location.pathname}`;
    const imageUrl = image || 'https://vmwebsolutions.in/images/desktop-mockup.webp';

    updateMeta('meta[name="description"]', 'meta', {
      name: 'description',
      content: metaDescription
    });

    updateMeta('meta[property="og:title"]', 'meta', {
      property: 'og:title',
      content: fullTitle
    });
    updateMeta('meta[property="og:description"]', 'meta', {
      property: 'og:description',
      content: metaDescription
    });
    updateMeta('meta[property="og:url"]', 'meta', {
      property: 'og:url',
      content: currentUrl
    });
    updateMeta('meta[property="og:type"]', 'meta', {
      property: 'og:type',
      content: 'website'
    });
    updateMeta('meta[property="og:image"]', 'meta', {
      property: 'og:image',
      content: imageUrl
    });
    updateMeta('meta[property="og:image:alt"]', 'meta', {
      property: 'og:image:alt',
      content: title
    });

    updateMeta('meta[name="twitter:card"]', 'meta', {
      name: 'twitter:card',
      content: 'summary_large_image'
    });
    updateMeta('meta[name="twitter:title"]', 'meta', {
      name: 'twitter:title',
      content: fullTitle
    });
    updateMeta('meta[name="twitter:description"]', 'meta', {
      name: 'twitter:description',
      content: metaDescription
    });
    updateMeta('meta[name="twitter:image"]', 'meta', {
      name: 'twitter:image',
      content: imageUrl
    });

    updateMeta('link[rel="canonical"]', 'link', {
      rel: 'canonical',
      href: currentUrl
    });
  }, [title, description, image]);

  return <>{children}</>;
};
