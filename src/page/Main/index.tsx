import React from "react";
import { useGlobalStore } from "../../store";
function Main() {
  const user = useGlobalStore.getState().userinfo;
  return (
    <>
      <div>Hello w React Easy HOME!</div>
    </>
  );
}

export default Main;
