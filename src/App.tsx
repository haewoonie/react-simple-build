import React from "react";
import { routes } from "./router";
import "./App.less";
import { useRoutes } from "react-router-dom";

const App = () => {
  const pages = useRoutes(routes);
  return <>{pages}</>;
};

export default App;
