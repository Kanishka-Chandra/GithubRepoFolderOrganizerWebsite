import React from "react";
import { Github } from "lucide-react";

type SocialAuthButtonsProps = {
  onGithub: () => void;
  onGoogle: () => void;
  loading: boolean;
  isLogin?: boolean;
};

const SocialAuthButtons: React.FC<SocialAuthButtonsProps> = ({
  onGithub,
  onGoogle,
  loading,
  isLogin = true,
}) => {
  return (
    <div className="space-y-4 mb-6">
      <button
        onClick={onGithub}
        disabled={loading}
        className="w-full flex items-center justify-center space-x-2 bg-[#24292E] text-white p-3 rounded-lg hover:bg-[#1a1f24] transition-colors"
      >
        <Github className="w-5 h-5" />
        <span>{isLogin ? "Continue with GitHub" : "Sign up with GitHub"}</span>
      </button>
      <button
        onClick={onGoogle}
        disabled={loading}
        className="w-full flex items-center justify-center space-x-2 bg-white text-gray-700 p-3 rounded-lg border-2 hover:bg-gray-50 transition-colors"
      >
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-5 h-5"
        />
        <span>{isLogin ? "Continue with Google" : "Sign up with Google"}</span>
      </button>
    </div>
  );
};

export default SocialAuthButtons;
