import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0366D6] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
      </div>
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-6">
          Ready to organize your GitHub repositories?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of developers who are already enjoying a cleaner, more
          organized GitHub experience.
        </p>
        <button className="bg-white text-[#0366D6] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          Install GitFolders Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
