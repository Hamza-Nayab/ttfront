import React, { useState } from "react";

function Counter() {
  const [rev, setrev] = useState(0);

  const increase = () => {
    setrev(rev + 1);
  };
  const decrease = () => {
    setrev(rev - 1);
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1>Counter: {rev}</h1>
          <button
            className="btn btn-primary col-12 btn-dark btn-lg"
            onClick={increase}
            style={{ margin: "20px", color: "#FFDE59" }}
          >
            Increase Counter
          </button>
          <button
            className="btn btn-primary col-12 btn-dark btn-lg"
            onClick={decrease}
            style={{ margin: "20px", color: "#FFDE59" }}
          >
            Decrease Counter
          </button>
        </div>
      </div>


    </>
  );
}

export default Counter;
