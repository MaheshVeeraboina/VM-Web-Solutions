import React from 'react';

const PrivacyPolicy = () => {
  return (
    <main className="pt-32 pb-24 px-6 bg-slate-50 min-h-[80svh]">
      <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100 prose prose-slate">
        <h1 className="text-3xl font-extrabold mb-8">Privacy Policy</h1>
        <p className="text-slate-600 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-slate-600 mb-4">
          When you use VM Web Solutions services or submit our contact form, we collect your name, email, phone number, and any associated business details to provide you with consultation and services.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-slate-600 mb-4">
          Your information is solely used to deliver web design services, contact you regarding project scope, and process necessary transactions. We do not sell or rent your personal information to third parties.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Data Security</h2>
        <p className="text-slate-600 mb-4">
          We implement industry-standard security practices to ensure your data is safe. Note that data transmission over the internet implies inherent risks, but our operational channels remain encrypted.
        </p>
      </article>
    </main>
  );
}

export default PrivacyPolicy;
