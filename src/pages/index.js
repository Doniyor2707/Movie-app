import { lazy } from "react";

export const Home = lazy(() => import("./home/Home")); 
export const Movies = lazy(() => import("./movies/Movies")); 
export const TvShows = lazy(() => import("./tvShows/TvShows"));
export const Details = lazy(() => import("./details/Details"));
export const DetailsTvShows = lazy(() => import("./detailsTvShows/DetailsTvShows"));
export const Suggest = lazy(() => import("./suggest/Suggest"));
export const Login = lazy(() => import("./login/Login"))
export const PageNotFound = lazy(() => import("./404/PageNotFount"))