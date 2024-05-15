import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import { Home,TvShows,Details,Suggest } from "../Routes";

const Router = () => {
  return (
    <>
      <Routes>
      {/* Main Layout */}
        <Route path="/" element = {<MainLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path="/details" element = {<Details/>}/>
            <Route path="/tvshows" element = {<TvShows/>}/>
            <Route path="/suggest" element = {<Suggest/>}/>
        </Route>

        {/* Dashboard.. */}


        {/* 404 */}
        <Route path="*" element = {<h1>Page Not Found</h1>}/>
      </Routes>
    </>
  );
};

export default Router;
