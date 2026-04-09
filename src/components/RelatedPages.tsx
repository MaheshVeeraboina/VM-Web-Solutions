import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface InternalLink {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

// Define related pages for cross-linking
const relatedPagesMap: Record<string, InternalLink[]> = {
  '/hyderabad-web-design': [
    {
      title: 'Gym Website Design India',
      description: 'Specialized website design for fitness centers and gyms',
      path: '/gym-website-developer-india',
      keywords: 'gym website, fitness website design'
    },
    {
      title: 'Coaching Institute Websites',
      description: 'Website solutions for coaching centers and educational institutes',
      path: '/coaching-institute-website-development',
      keywords: 'coaching website, education portal'
    },
    {
      title: 'Real Estate Website Design',
      description: 'Property management websites for real estate agents and brokers',
      path: '/real-estate-website-design-india',
      keywords: 'real estate website, property portal'
    },
  ],
  '/gym-website-developer-india': [
    {
      title: 'Hyderabad Web Design Agency',
      description: 'Local web design services for Hyderabad businesses',
      path: '/hyderabad-web-design',
      keywords: 'Hyderabad web design, local SEO'
    },
    {
      title: 'Coaching Institute Websites',
      description: 'Website solutions for coaching centers',
      path: '/coaching-institute-website-development',
      keywords: 'coaching website'
    },
    {
      title: 'Real Estate Website Design',
      description: 'Professional property websites',
      path: '/real-estate-website-design-india',
      keywords: 'real estate website'
    },
  ],
  '/coaching-institute-website-development': [
    {
      title: 'Hyderabad Web Design Agency',
      description: 'Web design services tailored for Hyderabad businesses',
      path: '/hyderabad-web-design',
      keywords: 'web design Hyderabad'
    },
    {
      title: 'Gym Website Design',
      description: 'Fitness center website solutions',
      path: '/gym-website-developer-india',
      keywords: 'gym website'
    },
    {
      title: 'Real Estate Website Design',
      description: 'Property management websites',
      path: '/real-estate-website-design-india',
      keywords: 'real estate website'
    },
  ],
  '/real-estate-website-design-india': [
    {
      title: 'Hyderabad Web Design Agency',
      description: 'Hyderabad-based web design expertise',
      path: '/hyderabad-web-design',
      keywords: 'Hyderabad web design'
    },
    {
      title: 'Gym Website Design',
      description: 'Fitness center website solutions',
      path: '/gym-website-developer-india',
      keywords: 'gym website'
    },
    {
      title: 'Coaching Institute Websites',
      description: 'Educational institute websites',
      path: '/coaching-institute-website-development',
      keywords: 'coaching website'
    },
  ],
};

interface RelatedPagesProps {
  currentPath: string;
  title?: string;
  className?: string;
}

export const RelatedPages: React.FC<RelatedPagesProps> = ({
  currentPath,
  title = 'Explore Our Services',
  className = ''
}) => {
  const relatedPages = relatedPagesMap[currentPath];

  if (!relatedPages) return null;

  return (
    <section className={`py-16 px-6 bg-white border-t border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{title}</h2>
        <p className="text-slate-600 mb-12 text-lg">
          Discover how we help businesses across different industries grow their online presence.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedPages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {page.title}
              </h3>
              <p className="text-slate-600 mb-4 text-sm">
                {page.description}
              </p>
              <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper component for inline contextual links within content
interface ContextualLinkProps {
  href: string;
  children: React.ReactNode;
  title?: string;
}

export const ContextualLink: React.FC<ContextualLinkProps> = ({ href, children, title }) => (
  <Link
    to={href}
    className="text-indigo-600 hover:text-indigo-700 font-medium underline hover:no-underline transition-colors"
    title={title}
  >
    {children}
  </Link>
);
