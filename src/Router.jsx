import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainLayout/MainLayout";
import { Home, TvShows, Details, Suggest, Login, PageNotFound, DetailsTvShows, Movies } from "./pages";
import { Dashboard } from "./layout/dashboard/Dashboard";
import { authRoutes, publicRoutes } from "./constans/path";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path={publicRoutes.home} element={<MainLayout />}>
          <Route path={authRoutes.login} element={<h1>Login</h1>} />
        </Route>

        {/* Main Layout */}
        <Route path={publicRoutes.home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={publicRoutes.movies} element={<Movies/>}/>
          <Route path={publicRoutes.details} element={<Details />} />
          <Route path={publicRoutes.tvShows} element={<TvShows />} />
          <Route path={publicRoutes.suggestMe} element={<Suggest />} />
          <Route path={publicRoutes.detailsTvShows} element={<h1>hhhhhh</h1>}/>
          <Route path={publicRoutes.authLogin} element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="main" element={<h1>hello world</h1>} />
        </Route>

        {/* 404 */}
      </Routes>
    </>
  );
};

export default Router;
