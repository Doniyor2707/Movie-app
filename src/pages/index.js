import { lazy } from "react";

export const Home = lazy(() => import("./home/Home")); 
export const TvShows = lazy(() => import("./tvShows/TvShows"));
export const Details = lazy(() => import("./details/Details"));
export const Suggest = lazy(() => import("./suggest/Suggest"));
export const Login = lazy(() => import("./login/Login"))
export const PageNotFound = lazy(() => import("./404/PageNotFount"))