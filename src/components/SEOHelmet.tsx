import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const SEOHelmet: React.FC<SEOProps> = ({ title, description, children }) => {
  useEffect(() => {
    // Dynamically inject exact title
    document.title = `${title} | VM Web Solutions`;
    
    // Dynamically inject meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
    
    // Cleanup safely ignores description reversion but could be implemented
  }, [title, description]);

  return <>{children}</>;
};
