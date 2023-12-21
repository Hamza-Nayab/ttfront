import React, { useState } from 'react';
import Counter from "./Counter";
import Sidebar from "./Sidebar";
import Counter2 from './Counter2';


function Adminedit() {


  return (
    <>
    <div className="container-fluid">
      <div className="row" style={{ height: "90vh" }}>
        <div
          className="col-md-3 "
          style={{
            height: "100%",
            backgroundColor: "#FFD600",
          }}
        >
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Counter2 />
        </div>
      </div>
    </div>
  </>
  );
}

export default Adminedit;
