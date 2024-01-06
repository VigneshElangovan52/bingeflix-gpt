import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import Browse from "./Browse";
import GPTSearchBox from "./GPTSearchBox";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/ai-gpt",
      element: <GPTSearchBox />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
