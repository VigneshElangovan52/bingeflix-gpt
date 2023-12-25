import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from './SignIn';
import Browse from './Browse';
import GPTSearchBox from './GPTSearchBox';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/auth';
import { useDispatch } from 'react-redux';
import { removeUser } from './utils/userSlice';

const Body = () => {

 const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <SignIn />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/ai-gpt',
      element: <GPTSearchBox />
    }
  ])

  useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    
  } else {
    dispatch(removeUser());
  }
});
  },[])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;