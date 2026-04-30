"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const [password, setPassword] = useState("");
  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
  };

  return (
    <section className=" flex items-center justify-center">
      <div className="w-full max-w-md glass rounded-xl mt-4 mb-4 shadow-lg p-6 md:p-8 flex flex-col gap-8">
        {/* Header */}
        <header className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-white text-shadow-md">
            Create your account
          </h2>
          <p className="text-gray-600 dark:text-white/50 mt-4">
            Start tracking your skills today
          </p>
        </header>

        {/* Social Signup */}
        <div className="flex flex-col gap-3">
          <Button className="w-full glass">Sign up with Google</Button>
          <Button className="w-full glass">Sign up with GitHub</Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="flex-1 h-px bg-gray-200"></span>
          <Link href="/login" className="text-gray-600 dark:text-white/50 ">
            or continue with email
          </Link>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-gray-600 dark:text-white/50">
                First Name
              </label>
              <input
                type="text"
                placeholder=" First Name"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-600 dark:text-white/50">
                Last Name
              </label>
              <input
                type="text"
                placeholder=" Last Name"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 dark:text-white/50">
              Email Address
            </label>
            <input
              type="email"
              placeholder=" Email Address"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 dark:text-white/50">Password</label>
            <input
              type="password"
              placeholder=" Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
            />
            {/* شروط اعتبارسنجی */}
            <div className="flex gap-4 text-xs mt-2 flex-wrap justify-center">
              <span
                className={`flex items-center gap-1 ${
                  validations.length ? "text-green-500" : "text-gray-400"
                }`}
              >
                {validations.length ? "✔️" : ""} At least 8 characters
              </span>
              <span
                className={`flex items-center gap-1 ${
                  validations.uppercase ? "text-green-500" : "text-gray-400"
                }`}
              >
                {validations.uppercase ? "✔️" : ""} One uppercase letter
              </span>
              <span
                className={`flex items-center gap-1 ${
                  validations.number ? "text-green-500" : "text-gray-400"
                }`}
              >
                {validations.number ? "✔️" : ""} One number
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 dark:text-white/50">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder=" Confirm Password"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
            />
          </div>

          {/* Optional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-gray-600 dark:text-white/50">
                Job Title <span className="opacity-60">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder=" Your Job Title"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-600 dark:text-white/50">
                Current Company <span className="opacity-60">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder=" Your Current Company"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1 accent-blue-600 glass" />
            <p className="text-sm text-gray-600 dark:text-white/50">
              I agree to the
              <a className="text-blue-400 cursor-pointer">Terms of Service </a>
              and
              <a className="text-blue-400 cursor-pointer"> Privacy Policy</a>.
            </p>
          </div>

          {/* CTA */}
          <Button
            variant="secondary"
            className="w-full py-3 text-base font-semibold glass"
          >
            Create Account
          </Button>
        </form>

        {/* Footer */}
        <div className="text-sm text-center space-y-2 text-gray-500">
          <p className="text-gray-600 dark:text-white/50">
            Already have an account?
            <a className="cursor-pointer text-blue-400"> sign in</a>
          </p>
          <p className="opacity-70 text-gray-600 dark:text-white/50">
            Your data is secure and encrypted
          </p>
        </div>

        {/* Legal */}
        <footer className="flex justify-center gap-4 text-xs text-gray-400">
          <span>
            Privacy Policy <em className="m-2 text-white/50">|</em>
          </span>
          <span>
            Terms<em className="m-2 text-white/50">|</em>
          </span>
          <span>Help</span>
        </footer>
      </div>
    </section>
  );
};

export default RegisterForm;
