import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Time from "./Time";

function Adminhome() {
  // const { sale,rev } = useContext(DataContext);
  const [rev, setRev] = useState();
  const [avgRev, setAvgRev] = useState();

  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  useEffect(() => {
    const fetchRecentReviews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/reviews");
        const data = response.data;
        const reviews = data.reviews.filter(
          (rev) => rev.user === currentUser._id
        );
        console.log(reviews);
        const revCount = reviews.length;
        console.log(revCount);
        setRev(revCount);
        var rating = 0;
        reviews.map((rev) => {
          rating += rev.rating;
        });

        const rat = rating / reviews.length;
        setAvgRev(rat);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching recent reviews:", error);
      }
    };

    fetchRecentReviews();
  }, []);
  return (
    <>
      <div
        className="text-center"
        style={{
          height: "15%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2em",
        }}
      >
        Welcome {currentUser.fullName}
      </div>
      <div className="container-fluid " style={{ height: "30%" }}>
        <div className="row">
          <div
            className="col-md-4 d-flex align-items-center justify-content-center rounded"
            style={{ backgroundColor: "#FFEB3B", height: "150px" }}
          >
            <div className="text-center">
              <h2>Total Reviews</h2>
              <h3>{rev}</h3>
            </div>
          </div>
          <div className="col-md-4"></div>
          <div
            className="col-md-4 d-flex align-items-center justify-content-center rounded"
            style={{ backgroundColor: "#FFD600", height: "150px" }}
          >
            <div className="text-center">
              <h2>Average Reviews</h2>
              <h3>{avgRev}</h3>
            </div>
          </div>
          <div style={{ marginTop: "-250px" }}>
            <Time />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminhome;
