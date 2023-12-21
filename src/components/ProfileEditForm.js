import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
const ProfileEditForm = (props) => {
  const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";
  const [user, setUser] = useState(props.user);
  const [error, setError] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);
  const profileImageRef = useRef(null);

  useEffect(() => {
    setUser(props.user);
    console.log(props.user);
  }, [props.user]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const emailValue = emailRef.current.value;

    const fullNameValue = fullNameRef.current.value;

    const formData = new FormData();
    formData.append("email", emailValue);

    formData.append("fullName", fullNameValue);

    try {
      axios
        .put(`http://localhost:3000/api/users/${user._id}`, {
          email: emailValue,
          fullName: fullNameValue,
        })
        .then(console.log("update success"));
    } catch (error) {
      console.error("Edit Profile error:", error);
      setError(`Error ${error.message}`);
    }
  };

  return (
    <div className="row">
           <div
        className="col-md-2"
        style={{
          height: "1000px",
          backgroundColor: "#FFD600",
          marginTop: "-15px",
        }}
      >
        <Sidebar user={currentUser.status} />
      </div>
    <form onSubmit={handleFormSubmit} className="col-md-9">
      {error && <p className="text-danger">{error}</p>}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          ref={emailRef}
          value={user.email}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          ref={fullNameRef}
          defaultValue={user.fullName}
        />
      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-dark" type="submit">
          Save Changes
        </button>
      </div>
    </form>
    </div>
  );
};

export default ProfileEditForm;
