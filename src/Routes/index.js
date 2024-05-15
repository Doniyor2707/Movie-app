import { lazy } from "react";

export const Home = lazy(() => import("../pages/home/Home.jsx")); 
export const TvShows = lazy(() => import("../pages/TvShows/TvShows.jsx"));
export const Details = lazy(() => import("../pages/Details/Details.jsx"));
export const Suggest = lazy(() => import("../pages/Suggest/Suggest.jsx"));