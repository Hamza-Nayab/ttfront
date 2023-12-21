import React from "react";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../App";
import usersAPI from "../apis/users";
import reviewsAPI from "../apis/review";
import "./card.css";
import { Link } from "react-router-dom";

function Listseller() {
  const [displayedSellers, setDisplayedSellers] = useState([]);

  const [startIndex, setStartIndex] = useState(0);
  const { data, setData } = useContext(DataContext);
  



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsersResponse = await usersAPI.getAllUsers();


        
        const allUsers = allUsersResponse.users; 

        console.log("Users : ", allUsers);
        const sellers = allUsers.filter(user => user.status === 'Seller');
  
        setDisplayedSellers(sellers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);





  useEffect(() => {
    return () => {
      console.log("flushing here");
    };
  }, [startIndex]);

  const showNextSellers = () => {
    setStartIndex(startIndex + 6);
  };

  const showPreviousSellers = () => {
    setStartIndex(Math.max(0, startIndex - 6));
  };

  return (
    <div className="container">
      <h1 className="my-4">List of Sellers</h1>
      <div className="row" style={{ height: "1200px" }}>
        {displayedSellers.map((seller) => (
          <div className="col-md-6" key={seller._id}>
            <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
              <div className="row g-0">
                <div
                  className="col-md-4 gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                    background: "#111111",
                  }}
                >
                  <img
               src={`http://localhost:3000/api/users/images/${seller.profilePicture?.split('\\').pop()}`}
                                alt="Avatar"
                    className="img-fluid my-3 rounded"
                    style={{
                      width: "90%",
                      marginTop: "-20px",
                      height: "190px",
                    }}
                  />
                  <div style={{ color: "#FFDE59" }}>
                    <h5>{seller.fullName}</h5>
                    <div style={{ height: "80px", overflow: "auto" }}>
                      <p>{seller.description}</p>
                    </div>
                    <Link  state={ {seller: seller }} to={{
                        pathname: "/profile",
                        state: { seller: seller } // Pass the seller object as state
  }}>
                    <button
                      className="btn btn-dark col-md-6"
                      type="submit"
                      style={{ margin: "9px" , width :""}}
                    >
                      <span style={{ color: "#FFDE59"}}>Visit</span>
                    </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-8" style={{ backgroundColor: "white" }}>
                  <div className="card-body p-4" style={{ color: "black" }}>
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Who am i?</h6>
                        <p className="text-muted">Web Developer</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Contact</h6>
                        <p className="text-muted">123 456 789</p>
                      </div>
                    </div>
                    <h6>Deals</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Completed</h6>
                        <p className="text-muted">999</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Reviews</h6>
                        <p className="text-muted">4.6/5</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start">
                      <a href="#!">
                        <i className="fab fa-facebook-f fa-lg me-3" style={{color :"black"}}></i>
                      </a>
                      <a href="#!">
                        <i className="fab fa-twitter fa-lg me-3" style={{color :"black"}}></i>
                      </a>
                      <a href="#!">
                        <i className="fab fa-instagram fa-lg" style={{color :"black"}}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ border: "", height: "70px", marginTop:"30px" }}>
        <div className="row mt-3">
          <button
            className="btn btn-dark col-md-3"
            onClick={showPreviousSellers}
            disabled={startIndex === 0}
          >
            <span style={{ color: "#FFDE59" }}>Previous 6 sellers</span>
          </button>
          <div className="col-md-6"></div>
          <button
            className="btn btn-dark col-md-3"
            onClick={showNextSellers}
            disabled={startIndex + 6 >= data.length}
          >
            <span style={{ color: "#FFDE59" }}>Next 6 sellers</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Listseller;

/* <div className="col-md-4 mt-4" key={seller.id}>
<div
  className="card profile-card-5"
  style={{ background: "white" }}
>
  <div className="card-img-block">
    <img
      className="card-img-top"
      src={seller.image}
      alt="Card image cap"
    />
  </div>
  <div className="card-body pt-0">
    <h5 className="card-title">{seller.name}</h5>
    <p className="card-id" style={{ color: "darkgray" }}>
      ID: {seller.id}
    </p>
    <p className="card-text">
      <span style={{ color: "black" }}>{seller.description}</span>
    </p>
  </div>
</div>
</div> */
