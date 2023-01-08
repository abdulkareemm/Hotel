import React from "react";

// components
import { Footer, Header } from "./components";

// pages
import { Home, RoomDetails } from "./pages";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "https://abdulkareemm.github.io/Hotel/",
    element: <Home />,
  },
  {
    path: "https://abdulkareemm.github.io/Hotel/room/:id",
    element: <RoomDetails />,
  },
]);
const App = () => {
  return <div>
  <Header />
  <RouterProvider router={router}/>
  <Footer />
  </div>;
};

export default App;
