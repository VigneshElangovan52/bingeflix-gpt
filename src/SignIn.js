import { useRef, useState } from "react";
import {isValid} from "./utils/isValid.js";

const SignIn = () => {
  const [signInFlag, setSignInFlag] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const signupHandler = () => {
    setSignInFlag(!signInFlag);
  };

  const submitHandler = () => {
    const messgage = isValid(name.current.value, email.current.value, password.current.value);
    alert(messgage);
  }

  return (
    <div>
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="background-img"
      />
      <form className="mx-auto absolute w-4/12 bg-black my-36 pl-12 pb-12 pr-12 pt-8 right-0 left-0 bg-opacity-75 rounded-lg">
        <h1 className="text-3xl m-2 text-white left-0 font-semibold flex items-start">
          {signInFlag ? "Sign In" : "Sign Up"}
        </h1>
        <input
          className="border border-solid p-3 my-2   border-black rounded-md bg-stone-700 w-full text-white"
          ref={name}
          placeholder={signInFlag ? "Email or phone number" : "Full Name"}
        />
        {!signInFlag && (
          <input
            className="border border-solid p-3 my-2   border-black rounded-md bg-stone-700 w-full text-white"
            placeholder="Your Email or Phone Number"
            ref={email}
          />
        )}
        <input
          className="border border-solid p-3 my-2 border-black rounded-md bg-stone-700 w-full text-white"
          type="password"
          ref={password}
          placeholder={signInFlag ? "Password" : "Enter a Password"}
        />
        <button className="font-semibold border border-solid border-black bg-red-700 w-full rounded-md my-2 p-3 text-white" onClick={()=>submitHandler()}>
          {signInFlag ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="flex items-end text-white ml-1 mt-1 cursor-pointer"
          onClick={() => signupHandler()}
        >
          {signInFlag
            ? "New to Netflix? Sign up now."
            : "Already an user? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
