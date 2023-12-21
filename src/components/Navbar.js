import React, { useState, useEffect } from "react";
import cad from "../Img/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null); 
  useEffect(() => {
    // Check if user is signed in (e.g., retrieved from localStorage)
    const signedInUser = localStorage.getItem("user");
    console.log("User .. : ",signedInUser);
    if (signedInUser) {
      setUser(JSON.parse(signedInUser));
    }
  }, []);

  const handleSignout = () => {
    // Handle signout by clearing the user from localStorage and state
    localStorage.removeItem("user");
    setUser(null);
  };

  function isBuyer(user){
    if (user.status==="Buyer"){
      return true;
    }
    else{
      return false;
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="logo" src={cad} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/test" className="nav-link">
                  Play Ground
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact us!
                </Link>
              </li>
              {!user && (
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                    Signin / Signup
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/Admin" className="nav-link">
                  Admin Dash
                </Link>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              action="https://google.com/search"
            >
              <input
                className="form-control me-2"
                type="text"
                name="q"
                placeholder="Search on Google"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                <span style={{ color: "#FFDE59" }}>Google?</span>
              </button>
            </form>
            {user && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.fullName} {/* Display username */}
                  </span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >

                   
                      {
                    
                      isBuyer(user)?( <li>

                        <Link to="/regseller" className="dropdown-item">
                        Reg as Seller
                        </Link>
                        </li>
                      ):""
                      }

                    
                   
                    <li>
                      <Link to="/reviews" className="dropdown-item">
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleSignout}
                        className="dropdown-item"
                      >
                        Signout
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
