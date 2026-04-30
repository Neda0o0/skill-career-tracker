import Button from "@/components/ui/Button";
import Link from "next/link";

const LoginForm = () => {
  return (
    <section className="flex items-start md:items-center justify-center px-4">
      <div className="w-full max-w-md glass rounded-xl shadow-lg p-6 md:p-8 flex flex-col gap-8">
        {/* Header */}
        <header className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-white text-shadow-md">
            Welcome back
          </h2>
          <p className="text-gray-500 dark:text-white/50">
            Sign in to continue your journey
          </p>
        </header>

        {/* Social Login */}
        <div className="flex flex-col gap-3">
          <Button className="w-full glass">Continue with Google</Button>
          <Button className="w-full glass">Continue with GitHub</Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="flex-1 h-px bg-gray-200"></span>
          <Link href="/register" className="text-gray-600 dark:text-white/50">
            or sign in with email
          </Link>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600 dark:text-white/50"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md border border-gray-300 text-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500/40
                         focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600 dark:text-white/50"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="px-3 py-2 rounded-md border border-gray-300 text-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500/40
                         focus:border-blue-500"
            />
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 dark:text-white/50">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <a className="text-blue-500 hover:underline cursor-pointer">
              Forgot password?
            </a>
          </div>

          {/* CTA */}
          <Button className="w-full py-3 text-base font-semibold glass">
            Sign In
          </Button>
        </form>

        {/* Switch Auth */}
        <div className="text-sm text-center text-gray-300">
          Do not have any account?
          <a className="ml-1 text-blue-500 cursor-pointer hover:underline">
            sign up
          </a>
        </div>

        {/* Legal */}
        <footer className="flex justify-center gap-4 text-xs text-gray-400">
          <span className="cursor-pointer hover:text-gray-600">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-gray-600">Terms</span>
          <span className="cursor-pointer hover:text-gray-600">Help</span>
        </footer>
      </div>
    </section>
  );
};

export default LoginForm;
