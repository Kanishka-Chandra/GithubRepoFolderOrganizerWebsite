import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  HEADING,
  SUBHEADING,
  EMAIL,
  BUTTON_TEXT,
} from "../constants/constants_waitlistpage";
import validator from "email-validator";

const JoinWaitlist: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  // Check if the email is valid as it is typed
  const isValidEmail = email && validator.validate(email);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(null);

    // Validate email before proceeding
    if (!isValidEmail) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/submitEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (result.result === "success") {
        setMessage("You're on the waitlist! 🎉");
        setEmail("");
      } else {
        setMessage("Error adding your email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="from-primary flex flex-1 items-center justify-center bg-gradient-to-b to-white px-4 py-6 md:px-16 md:py-20">
        <div className="w-full max-w-md space-y-8 p-6">
          <div className="space-y-4 text-center">
            <h2 className="text-text-primary text-4xl font-bold">{HEADING}</h2>
            <p className="text-text-secondary text-lg">{SUBHEADING}</p>
          </div>

          {message && (
            <div
              className={`rounded-lg p-4 text-center font-medium ${
                message.includes("🎉")
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-text-primary mb-2 block font-medium"
              >
                {EMAIL.lable}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`placeholder:text-text-placeholder transition-color w-full rounded-xl p-3 duration-200 outline-none focus:ring-2 ${
                  email && !isValidEmail
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "focus:ring-accent border border-gray-300 bg-gray-50 focus:border-transparent"
                }`}
                placeholder={EMAIL.placeholder}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-accent-hover flex w-full items-center justify-center rounded-lg p-3 font-medium text-white transition-colors disabled:bg-gray-500 hover:disabled:bg-gray-600"
              disabled={!isValidEmail}
            >
              {BUTTON_TEXT}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
