import React, { Suspense } from "react";
import Router from "./Router";
import "./App.css";

function App() {
  return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router />
      </Suspense>
  );
}

export default App;
