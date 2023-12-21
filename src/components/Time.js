import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card bg-warning text-dark">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw2.webp"
              className="w-100" alt="Background" />
            <div className="card-body p-4 text-center">
              <div className="d-flex justify-content-between">
                <p className="h5 fw-normal">{formattedDate}</p>
                <p className="h5 fw-normal">{formattedTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
