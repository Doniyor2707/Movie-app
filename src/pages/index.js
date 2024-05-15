import { lazy } from "react";

export const Home = lazy(() => import("./home/Home")); 
export const TvShows = lazy(() => import("./TvShows/TvShows"));
export const Details = lazy(() => import("./Details/Details"));
export const Suggest = lazy(() => import("./Suggest/Suggest"));