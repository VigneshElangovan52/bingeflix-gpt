import React from "react";

const SignIn = () => {
  return (
    <div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="background-img"
      />
      <div className="w-1/3 border border-solid border-black bg-black m-auto">
        <h1 className= "text-xl text-white">Sign In</h1>
        <div> 
          <form>
            <input className="border border-solid p-2 m-2 border-black rounded-md bg-stone-700 w-48" placeholder="Email or phone number" />
          </form>
        </div>
        <div>
          <form>
            <input className="border border-solid p-2 m-2 border-black rounded-md bg-stone-700 w-48" placeholder="Password" />
          </form>
        </div>
        <div>
          <button className="border border-solid border-black bg-red-600 w-48 rounded-md m-2 py-2">
          Sign In
        </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
