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
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="focus:ring-accent w-full rounded-lg border border-gray-200 p-3 focus:border-transparent focus:ring-2"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="focus:ring-accent w-full rounded-lg border border-gray-200 p-3 focus:border-transparent focus:ring-2"
          placeholder="••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-accent hover:bg-accent-hover flex w-full items-center justify-center space-x-2 rounded-lg p-3 text-white transition-colors"
      >
        <span>{buttonText}</span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </form>
  );
};

export default EmailAuthForm;
