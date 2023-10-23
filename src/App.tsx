import React from "react";
import { RouterProvider } from "react-router-dom";

// Internal imports
import { router } from "./router";
import { PageLoader } from "./components/PageLoader/PageLoader";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<PageLoader />} />
    </div>
  );
}

export default App;
