import Button from "@/components/ui/Button";

const RegisterForm = () => {
  return (
    <section className="bg-blue-300">
      <div className="p-5 max-w-md flex flex-col gap-8 mx-auto">
        {/* Header */}
        <header className=" text-gray-200 space-y-2">
          <h2 className="md:text-4xl text-3xl font-bold">
            Create your account
          </h2>
          <p>Start tracking your skills today</p>
        </header>

        {/* Social Signup */}
        <div className="flex flex-col gap-3">
          <Button>Sign up with Google</Button>
          <Button>Sign up with GitHub</Button>
        </div>

        {/* Divider */}
        <div className="text-center text-sm opacity-70">
          or continue with email
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label>First Name</label>
              <input
                type="text"
                placeholder=" First Name"
                className="border border-gray-500 rounded-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Last Name</label>
              <input
                type="text"
                placeholder=" Last Name"
                className="border border-gray-500 rounded-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label>Email Address</label>
            <input
              type="email"
              placeholder=" Email Address"
              className="border border-gray-500 rounded-sm"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              type="password"
              placeholder=" Password"
              className="border border-gray-500 rounded-sm"
            />
            <ul className="text-xs opacity-70 space-y-1">
              <li>At least 8 characters</li>
              <li>One uppercase letter</li>
              <li>One number</li>
            </ul>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder=" Confirm Password"
              className="border border-gray-500 rounded-sm"
            />
          </div>

          {/* Optional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label>
                Job Title <span className="opacity-60">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder=" Your Job Title"
                className="border border-gray-500 rounded-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>
                Current Company <span className="opacity-60">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder=" Your Current Company"
                className="border border-gray-500 rounded-sm"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" />
            <p>
              I agree to the <em>Terms of Service</em> and
              <em>Privacy Policy</em>.
            </p>
          </div>

          {/* CTA */}
          <Button variant="secondary" className="rounded-md w-full">
            Create Account
          </Button>
        </form>

        {/* Footer */}
        <div className="text-sm text-center space-y-2">
          <p>
            Already have an account?
            <a className="cursor-pointer text-blue-400">Sign in</a>
          </p>
          <p className="opacity-70">Your data is secure and encrypted</p>
        </div>

        {/* Legal */}
        <footer className="flex justify-center">
          <span>
            Privacy Policy <em className="m-2">|</em>
          </span>
          <span>
            Terms<em className="m-2">|</em>
          </span>
          <span>Help</span>
        </footer>
      </div>
    </section>
  );
};

export default RegisterForm;
