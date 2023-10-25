import React from "react";
import Main from "../page/Main";

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
    element: <Main></Main>,
  },
];
