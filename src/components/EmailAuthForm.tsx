import React from "react";
import { ArrowRight } from "lucide-react";

type EmailAuthFormProps = {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  buttonText: string;
};

const EmailAuthForm: React.FC<EmailAuthFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  buttonText,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0366D6] focus:border-transparent"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0366D6] focus:border-transparent"
          placeholder="••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#0366D6] text-white p-3 rounded-lg hover:bg-[#024E9D] transition-colors flex items-center justify-center space-x-2"
      >
        <span>{buttonText}</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
};

export default EmailAuthForm;
