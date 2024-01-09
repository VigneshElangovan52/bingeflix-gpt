import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { auth } from "./utils/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const signOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="bg-black">
      <img
        className="w-32 z-10 bg-gradient-to-b from-black absolute mt-3 ml-6  bg-black bg-opacity-10"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userDetails && (
        <div className="flex p-2 justify-end">
          <img className="w-14 h-14 mt-1 border items-start border-black rounded-2xl mr-2" alt="usericon" src={userDetails?.photoURL} />
          <p className=" h-10 flex mt-3 items-center p-2 font-medium text-white">{userDetails?.displayName}</p>
          <input type="button" value='Log out' className="px-2 mt-4  bg-slate-600 rounded-lg hover:bg-opacity-70 mx-2 h-9  font-bold text-white active:text-white" onClick={signOutHandler}/>  
        </div>
      )}
    </div>
  );
};

export default Header;
