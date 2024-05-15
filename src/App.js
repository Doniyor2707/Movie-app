import React, { Suspense } from "react";
import MainLayout from "./layout/mainLayout/MainLayout";
import Router from "./Routes/Router";
import "./App.css";

function App() {
  return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router />
      </Suspense>
  );
}

export default App;
