import React, { useState, useEffect } from "react";
import usersAPI from "../apis/users";
import Sidebar from "../components/Sidebar";
import "../styles/admin/users.css";

function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsersResponse = await usersAPI.getAllUsers();
        const allUsers = allUsersResponse.users;
        console.log("Users:", allUsers);
        setUsers(allUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await usersAPI.deleteUser(userId);
      const updatedUsers = users.filter((user) => user._id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
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
      <div className="col-md-9">
        <h1>Admin Users Page</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>ID</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user._id}</td>
                  <img
                    src={`http://localhost:5000/api/users/images/${user.profilePicture
                      ?.split("\\")
                      .pop()}`}
                    className="review-image"
                  />

                  <td>
                    <button
                      className="btn btn-dark delete"
                      onClick={() => handleDelete(user._id)}
                    >
                      <span style={{ color: "#FFDE59" }}>Delete</span>
                    </button>
                    {/* <button className="action-button update">Update</button>
                  <button className="action-button view">View</button> */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsersPage;
