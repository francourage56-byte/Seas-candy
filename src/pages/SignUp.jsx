import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import SocialSignup from "../components/SocialSignup";

const SignUp = () => {
  return (
    <div className="pt-32 sm:pt-56 pb-10 px-4 bg-grey dark:bg-darkmode">
      <div className="container mx-auto max-w-lg overflow-hidden rounded-lg bg-white dark:bg-darklight text-center px-8 py-14 sm:px-12 md:px-16">
        <div>
          <div className="mb-10 text-center mx-auto inline-block">
            <Logo />
          </div>

          <SocialSignup />
          <span className="z-1 relative my-8 block text-center">
            <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-dark_border">
              {" "}
            </span>
            <span className="text-muted dark:text-white/60 relative z-10 inline-block ng-white px-3 text-base dark:bg-darklight">
              OR
            </span>
          </span>

          <form>
            <div className="mb-[22px]">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="name"
                required
                className="w-full rounded-md border border-border bg-transparent px-5 py-3 text-base outline-hidden transition placeholder:text-grey-400 focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-[22px]">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border placeholder:text-grey-400 border-border dark_border border-solid 
                bg-transparent px-5 py-3 text-base outline-hidden transition focus:border-primary 
                focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-[22px]">
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border placeholder:text-grey-400 border-border dark_border border-solid 
                bg-transparent px-5 py-3 text-base outline-hidden transition focus:border-primary 
                focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-9">
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary hover:bg-primary/75 dark:hover:bg-primary! px-5 py-3 text-white font-medium transition transition-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center justify-center">
            <Link
              to="#"
              className="mb-2 inline-block text-base text-dark hover:text-primary dark:hover:text-primary"
            >
              By creating an account you are agree with our Privacy and Policy
            </Link>
            <p className="text-body-secondary text-base">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
