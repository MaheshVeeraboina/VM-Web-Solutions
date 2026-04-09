import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

// Define breadcrumb routes mapping
const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
  '/': [{ label: 'Home', path: '/' }],
  '/services': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' }
  ],
  '/portfolio': [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' }
  ],
  '/pricing': [
    { label: 'Home', path: '/' },
    { label: 'Pricing', path: '/pricing' }
  ],
  '/testimonials': [
    { label: 'Home', path: '/' },
    { label: 'Testimonials', path: '/testimonials' }
  ],
  '/contact': [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' }
  ],
  '/hyderabad-web-design': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Hyderabad Web Design', path: '/hyderabad-web-design' }
  ],
  '/gym-website-developer-india': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Gym Website Design', path: '/gym-website-developer-india' }
  ],
  '/coaching-institute-website-development': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Coaching Institute Web Design', path: '/coaching-institute-website-development' }
  ],
  '/real-estate-website-design-india': [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Real Estate Website Design', path: '/real-estate-website-design-india' }
  ],
  '/privacy-policy': [
    { label: 'Home', path: '/' },
    { label: 'Privacy Policy', path: '/privacy-policy' }
  ],
  '/terms-of-service': [
    { label: 'Home', path: '/' },
    { label: 'Terms of Service', path: '/terms-of-service' }
  ],
};

interface BreadcrumbProps {
  className?: string;
  showOnHome?: boolean; // Whether to show breadcrumb on home page
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', showOnHome = false }) => {
  const location = useLocation();
  const breadcrumbs = breadcrumbMap[location.pathname] || [{ label: 'Home', path: '/' }];

  // Don't show breadcrumb on home unless explicitly enabled
  if (location.pathname === '/' && !showOnHome) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`bg-slate-50 py-4 px-6 border-b border-slate-200 mt-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center gap-2">
              {index === 0 && <Home size={16} className="text-slate-500" />}
              {index > 0 && <ChevronRight size={16} className="text-slate-400" />}
              
              {index === breadcrumbs.length - 1 ? (
                <span className="font-semibold text-slate-900" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link 
                  to={crumb.path}
                  className="text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
