import React, { useState } from 'react';

interface OptimizedPictureProps {
  avifSrcSet: string;
  webpSrcSet: string;
  fallbackSrc: string;
  alt: string;
  lqip?: string; // Low Quality Image Placeholder (Base64 Inline)
  className?: string; // Classes for the <img> tag
  pictureClassName?: string; // Classes for the <picture> wrapper
  fetchPriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  // width/height passed to help prevent CLS
  width?: number | string;
  height?: number | string;
}

export const OptimizedPicture: React.FC<OptimizedPictureProps> = ({
  avifSrcSet,
  webpSrcSet,
  fallbackSrc,
  alt,
  lqip,
  className = '',
  pictureClassName = '',
  fetchPriority = 'auto',
  loading = 'lazy',
  decoding = 'async',
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${pictureClassName}`} style={{ width, height }}>
      {/* Blurred Low Quality Image Placeholder (LQIP) */}
      {lqip && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xl scale-110 pointer-events-none transition-opacity duration-700 ease-in-out"
          style={{ 
            backgroundImage: `url(${lqip})`,
            opacity: isLoaded ? 0 : 1 
          }}
          aria-hidden="true"
        />
      )}

      {/* Primary Picture Element */}
      <picture>
        {/* sizes="(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px" 
            We use a safe generic responsive sizes attribute here, scaling appropriately */}
        <source type="image/avif" srcSet={avifSrcSet} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" />
        <source type="image/webp" srcSet={webpSrcSet} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" />
        <img
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          fetchPriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded || !lqip ? 'opacity-100' : 'opacity-0'} ${className}`}
        />
      </picture>
    </div>
  );
};
