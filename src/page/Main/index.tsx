import React from "react";
import { useGlobalStore } from "../../store";
function Main() {
  const user = useGlobalStore.getState().userinfo;
  console.log(process.env.TEST_REACT_URL);
  console.log(process.env.MORE_URL);
  return (
    <>
      <div>Hello w React Easy HOME!</div>
    </>
  );
}

export default Main;
