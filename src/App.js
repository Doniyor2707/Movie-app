import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/mainLayout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainLayout/>
      </div>
    </BrowserRouter>
  );
}

export default App;
