import { ArrowRight, Folder, Star, Users } from "lucide-react";
import React from "react";
import StatBox from "./StatBox";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <div className="flex items-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-600">Trusted by 20,000+ developers</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#24292E] mb-6 leading-tight">
            Organize GitHub <span className="text-[#0366D6]">Repositories</span>{" "}
            Like Never Before
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform cluttered repositories into a streamlined, organized
            workspace. The missing folder structure for your GitHub
            repositories.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-[#0366D6] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#024E9D] transition-colors flex items-center space-x-2 group">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Join 20k+ users</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-8">
            <StatBox value="75.2%" label="Time Saved" />
            <StatBox value="20k+" label="Active Users" />
            <StatBox value="4.8/5" label="User Rating" />
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80"
            alt="Dashboard preview"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
            <Folder className="w-10 h-10 text-[#0366D6]" />
            <div>
              <div className="font-semibold">Smart Organization</div>
              <div className="text-sm text-gray-600">Drag & Drop folders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
