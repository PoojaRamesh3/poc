import FormInput from "./FormInput";
import SignInButton from "./SignInButton";
import SocialMediaButton from "./SocialMediaButton";
import Link from "./Link";
import CopyRight from "./CopyRight";

const Form = () => {
  return (
    <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
      <div className="mb-7">
        <h3 className="font-semibold text-2xl text-gray-800">Sign In</h3>
        <p className="text-gray-400">
          Don't have an account? <Link text={"Sign Up"} />
        </p>
      </div>
      <form className="space-y-6">
        <FormInput placeholder={"Email"} />
        <FormInput placeholder={"Password"} />
        <div className="flex items-center justify-between">
          <div className="text-sm ml-auto">
            <Link text={"Forgot your password?"} />
          </div>
        </div>
        <SignInButton label={"Sign in"} />
        <div className="flex items-center justify-center space-x-2 my-5">
          <span className="h-px w-16 bg-gray-200"></span>
          <span className="text-gray-500 font-normal">or</span>
          <span className="h-px w-16 bg-gray-200"></span>
        </div>
        <div className="flex justify-center gap-5 w-full ">
          <SocialMediaButton label={"Google"} />
          <SocialMediaButton label={"Facebook"} />
        </div>
      </form>
      <CopyRight />
    </div>
  );
};

export default Form;
