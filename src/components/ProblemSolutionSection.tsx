import React from "react";
import ComparisonCard from "./ComparisonCard";

const ProblemSolutionSection: React.FC = () => {
  const withoutFeatures = [
    "Endless scrolling through unorganized repositories",
    "No way to group related projects together",
    "Time wasted searching for specific repositories",
  ];

  const withFeatures = [
    "Intuitive folder organization for all your repositories",
    "Quick access to grouped projects and repositories",
    "Efficient workflow with smart search and filters",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24292E] mb-4">
            Why GitFolders?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference between chaos and organization
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <ComparisonCard
              type="negative"
              title="Without GitFolders"
              features={withoutFeatures}
            />
            <ComparisonCard
              type="positive"
              title="With GitFolders"
              features={withFeatures}
            />
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Organization comparison"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-[#0366D6]">75%</div>
              <div className="text-sm text-gray-600">
                Faster Repository Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
