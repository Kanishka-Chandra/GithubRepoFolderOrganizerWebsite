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
    <div className="space-y-2">
      <button
        onClick={onGithub}
        disabled={loading}
        className="bg-text-primary flex w-full items-center justify-center space-x-2 rounded-lg p-3 text-white transition-colors hover:bg-[#1a1f24]"
      >
        <Github className="h-5 w-5" />
        <span>{isLogin ? "Continue with GitHub" : "Sign up with GitHub"}</span>
      </button>
      <button
        onClick={onGoogle}
        disabled={loading}
        className="flex w-full items-center justify-center space-x-2 rounded-lg border-2 bg-white p-3 text-gray-700 transition-colors hover:bg-gray-50"
      >
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="h-5 w-5"
        />
        <span>{isLogin ? "Continue with Google" : "Sign up with Google"}</span>
      </button>
    </div>
  );
};

export default SocialAuthButtons;
