import React, { Suspense } from "react";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router />
        <ToastContainer position="top-center"/>
      </Suspense>
  );
}

export default App;
