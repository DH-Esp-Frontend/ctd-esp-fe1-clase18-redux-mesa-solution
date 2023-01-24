import React from "react";
// import {showMessage} from "../redux/slice"
import { useSelector} from "react-redux";
import { RootState } from "../redux/store";

const TestRedux = () => {
  const state = useSelector((state:RootState) => state.message);


  return (
    <>
    {/* <button onClick={()=>dispatch(showMessage("Testeando el store"))}>Test</button> */}
    {state && state}
    </>
  )

};

export default TestRedux;
