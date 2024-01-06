import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { auth } from "./utils/auth";

const Header = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <img
        className="w-44 z-10 bg-gradient-to-b from-black absolute mt-3 ml-6  bg-black bg-opacity-10"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userDetails && (
        <div className="flex items-center p-2 justify-end">
          <img className="w-16 my-2 h-16 border border-black rounded-2xl mr-2" alt="usericon" src={userDetails?.photoURL} />
          <p className=" h-10 flex items-center p-2 font-bold text-black">{userDetails?.displayName}</p>
          <input type="button" value='Log out' className="px-2 py-1 mx-2 border border-solid rounded-md font-bold text-white bg-stone-700  active:text-white hover:text-red-600" />  
        </div>
      )}
    </div>
  );
};

export default Header;
