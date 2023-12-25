import { useRef, useState } from "react";
import { isValid } from "./utils/isValid.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/auth.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from './utils/userSlice';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signInFlag, setSignInFlag] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const signupHandler = () => {
    setSignInFlag(!signInFlag);
  };

  const submitHandler = () => {
    const message = isValid(email.current.value, password.current.value);
    if (message) return alert(message);
    if (!signInFlag) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/117821648?s=400&u=162c25928ec5327cb857190611a7dbbe860419b0&v=4",
          })
            .then(() => {
              const {email, displayName, photoURL, uid} = auth.currentUser;
              dispatch(addUser({email: email, displayName: displayName, photoURL: photoURL, uid: uid}));
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
            });
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "user2");
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          console.log(error, "err2");
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  };

  return (
    <div>
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="background-img"
      />
      <form
        className="mx-auto absolute w-4/12 bg-black my-36 pl-12 pb-12 pr-12 pt-8 right-0 left-0 bg-opacity-75 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl m-2 text-white left-0 font-semibold flex items-start">
          {signInFlag ? "Sign In" : "Sign Up"}
        </h1>
        {!signInFlag && (
          <input
            className="border border-solid p-3 my-2   border-black rounded-md bg-stone-700 w-full text-white"
            placeholder="Full Name"
            ref={name}
          />
        )}
        <input
          className="border border-solid p-3 my-2   border-black rounded-md bg-stone-700 w-full text-white"
          ref={email}
          placeholder="Email address"
        />
        <input
          className="border border-solid p-3 my-2 border-black rounded-md bg-stone-700 w-full text-white"
          type="password"
          ref={password}
          placeholder={signInFlag ? "Password" : "Enter a Password"}
        />
        <button
          className="font-semibold border border-solid border-black bg-red-700 w-full rounded-md my-2 p-3 text-white"
          onClick={() => submitHandler()}
        >
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
