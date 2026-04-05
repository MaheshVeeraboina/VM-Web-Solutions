import React from 'react';

const TermsOfService = () => {
  return (
    <main className="pt-32 pb-24 px-6 bg-slate-50 min-h-[80svh]">
      <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100 prose prose-slate">
        <h1 className="text-3xl font-extrabold mb-8">Terms of Service</h1>
        <p className="text-slate-600 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-slate-600 mb-4">
          By engaging VM Web Solutions for web development projects, you agree to be bound by these terms. We reserve the right to alter or update terms as necessary to accurately reflect business operations.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. Service Scope</h2>
        <p className="text-slate-600 mb-4">
          Our standard scope involves the architecture, design, and deployment of a responsive website. Timeline limits, revisions, and any continuous SEO/hosting maintenance contracts will be explicitly defined in an independent project quoting document.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Payment & Intellectual Property</h2>
        <p className="text-slate-600 mb-4">
          Upon final payment settlement, specific localized assets designed uniquely for the client transfer ownership to the client. Proprietary backend systems, frameworks, or deployment architectures remain the intellectual property of VM Web Solutions.
        </p>
      </article>
    </main>
  );
}

export default TermsOfService;
