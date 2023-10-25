import React from "react";
import { Navigate } from "react-router-dom";
import Main from "../page/Main";
import Login from "../page/Login";

type Router = {
  name?: string;
  element?: any;
  path?: string;
  children?: Array<Router>;
  meta?: {
    title?: string;
  };
  redirect?: string;
};

export const routes: Array<Router> = [
  {
    path: "/",
    element: <Navigate to={"/login"}></Navigate>,
  },
  {
    path: "/main",
    element: <Main></Main>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
];
