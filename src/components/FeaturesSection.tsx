import React from "react";
import { FolderTree, Github, Search } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FolderTree className="w-8 h-8 text-[#0366D6]" />,
      title: "Smart Folders",
      description:
        "Create and manage virtual folders to organize your repositories exactly how you want them.",
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Github className="w-8 h-8 text-[#0366D6]" />,
      title: "GitHub Integration",
      description:
        "Works perfectly with your existing GitHub account. No additional configuration needed.",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Search className="w-8 h-8 text-[#0366D6]" />,
      title: "Quick Search",
      description:
        "Find your repositories instantly with our smart search and folder structure.",
      image:
        "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24292E] mb-4">
            Everything you need to organize your GitHub workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed for developers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
