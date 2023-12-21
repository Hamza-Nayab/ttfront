import React, { useState,useContext } from "react";
import Count from "./Count";
import { DataContext } from "../App";

function Counter2() {

  const { sale, setSale,rev, setRev } = useContext(DataContext);

  const Rincrease = () => {
    setRev(rev + 1);
  };
  const Rdecrease = () => {
    setRev(rev - 1);
  };


  const Sincrease = () => {
    setSale(sale + 1);
  };
  const Sdecrease = () => {
    setSale(sale - 1);
  };



  

  return (
    <>
      <div className="container d-flex justify-content-center vh-100">
        <div className="text-center">
          <h1>Counter: {rev}</h1>
          <button
            className="btn btn-primary btn-dark btn-lg"
            onClick={Rincrease}
            style={{ margin: "20px", color: "#FFDE59" }}
          >
            Increase Reviews
          </button>
          <button
            className="btn btn-primary btn-dark btn-lg"
            onClick={Rdecrease}
            style={{ margin: "20px", color: "#FFDE59" }}
          >
            Decrease Counter
          </button>
        </div>
      </div>

      <div className="container d-flex justify-content-center vh-100" style={{marginTop : "-600px"}}>
        <div className="text-center">
          <h1>Sale Counter: {sale}</h1>
          <button
            className="btn btn-primary btn-dark btn-lg"
            onClick={Sincrease}
            style={{ margin: "20px", color: "#FFDE59" }}
          >
            Increase Sale
          </button>
          <button
            className="btn btn-primary btn-dark btn-lg"
            onClick={Sdecrease}
            style={{ margin: "20px", color: "#FFDE59" }}
          >
            Decrease Sale
          </button>
        </div>
      </div>
      <div className="container" style={{height :"50vh", marginTop :"-500px"}}>
      <Count p={rev} q={sale} r={1}/>
      </div>
    </>
  );
}

export default Counter2;
