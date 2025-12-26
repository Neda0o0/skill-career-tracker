import Button from "@/components/ui/Button";

const RegisterForm = () => {
  return (
    <div className="bg-blue-300 md:h-screen">
      <div className="p-5">
        <div>
          <div>
            <div className=" text-gray-200">
              <h2 className="md:text-4xl text-3xl font-bold">
                create your account
              </h2>
              <h3>Start tracking your skills today</h3>
            </div>
            <Button>Sign up with Google</Button>
            <Button>Sign up with GitHub</Button>
          </div>
          <div>
            <div>
              <div>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div>
              <label htmlFor="">Email Address</label>
              <input type="email" placeholder="Email Address" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Password" />
              <span>At least 8 characters</span>
              <span>One uppercase letter</span>
              <span>One number</span>
            </div>
            <div>
              <label htmlFor="">Confirm Password</label>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div>
              <div>
                <label htmlFor="">
                  Job Title <span>(Optional)</span>
                </label>
                <input type="text" placeholder="Your Job Title" />
              </div>
              <div>
                <label htmlFor="">
                  Current Company <span>(Optional)</span>
                </label>
                <input type="text" placeholder="Your Current Company" />
              </div>
            </div>
          </div>
          <div>
            <input type="checkbox" />
            <span>
              I agree to the <em>Terms of Service</em> and
              <em>Privacy Policy</em>.
            </span>
          </div>
          <div>
            <Button variant="secondary" className="rounded-md w-full">
              Create Account
            </Button>
          </div>
          <div>
            <p>
              Already have an account?
              <a className="cursor-pointer text-blue-400">Sign in</a>
            </p>
          </div>
          <div>
            <p>Your data is secure and encrypted</p>
          </div>
        </div>
        <div>
          <span>Privacy Policy</span>
          <span> Terms </span>
          <span> Help</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
