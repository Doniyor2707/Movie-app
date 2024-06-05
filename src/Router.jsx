import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainLayout/MainLayout";
import { Home,TvShows,Details,Suggest } from "./pages";
import { Dashboard } from "./layout/dashboard/Dashboard";

const Router = () => {
  return (
    <>
      <Routes>
      {/* Main Layout */}
        <Route path="/" element = {<MainLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path="/details" element = {<Details/>}/>
            <Route path="/tvshows" element = {<TvShows/>}/>
            <Route path="/suggestMe" element = {<Suggest/>}/>
        </Route>

        {/* Dashboard */}
        <Route path="/" element={<Dashboard/>}>
          <Route path="main" element = {<h1>hello world</h1>}/>
        </Route>

        {/* 404 */}
        <Route path="*" element = {<h1>Page Not Found</h1>}/>
      </Routes>
    </>
  );
};

export default Router;
