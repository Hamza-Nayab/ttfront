import { useContext, useState, useEffect } from "react";
import { DataContext } from "../App";
import usersAPI from "../apis/users";

function Review2() {
  const [displayedSellers, setDisplayedSellers] = useState([]);

  const [startIndex, setStartIndex] = useState(0);
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsersResponse = await usersAPI.getAllUsers();

        const allUsers = allUsersResponse.users;

        console.log("Users : ", allUsers);
        const sellers = allUsers.filter((user) => user.status === "Seller");

        setDisplayedSellers(allUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
     setDisplayedSellers(data.slice(startIndex, startIndex + 2));
    return () => {
      console.log("flushing here");
    };
  }, [startIndex]);

  const showNextSellers = () => {
    setStartIndex(startIndex + 2);
  };

  const showPreviousSellers = () => {
    setStartIndex(Math.max(0, startIndex - 2));
  };

  return (
    <>
      <div className="container" style={{ marginBottom: "30px" }}>
        <div className="row">
          <div className="col-md-9">
            <div style={{ height: "55vh", backgroundColor: "whitesmoke" }}>
              <div
                id="multiSlider1"
                className="carousel slide bg-ffde59"
                data-bs-ride="carousel"
                style={{ maxWidth: "65vw", marginTop: "20px" }}
              >
                <style>
                  {`
                  .bg-ffde59 {
                    background-color: whitesmoke;
                  }

                  .carousel-inner .card {
                    background-color: #ffde59; /* Set card background color */
                  }

                  .card img {
                    max-width: 100%; 
                    height: auto; 
                  }

                  .card-title {
                    font-size: 125%;
                  }
                `}
                </style>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        {displayedSellers.map((rev) => (
                          <div className="col-md-6">
                            <div className="card mb-3">
                              <img
                                src={`http://localhost:3000/api/users/images/${rev.profilePicture
                                  ?.split("\\")
                                  .pop()}`}
                                className="card-img-top"
                                alt="Title 1"
                              />
                              <div className="card-body">
                                <h5 className="card-title">{rev.fullName}</h5>
                                <p className="card-text">
                                  {rev.description
                                    ? rev.description
                                    : "No Description"}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#multiSlider1"
                  data-bs-slide="prev"
                  onClick={showPreviousSellers}
                  disabled={startIndex === 0}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#multiSlider1"
                  data-bs-slide="next"
                  onClick={showNextSellers}
                  disabled={startIndex + 2 >= data.length}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <div>
              <h2>Our Sellers</h2>
              <p>
                Explore the testimonials from our satisfied users. Their
                feedback speaks volumes about the quality of our service and
                dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review2;
