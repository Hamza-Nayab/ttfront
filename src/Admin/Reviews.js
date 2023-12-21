import React, { useState, useEffect } from "react";
import reviewsAPI from "../apis/review";
import "../styles/admin/reviews.css";
import Sidebar from "../components/Sidebar";

function AdminReviews() {
  const [reviews, setReviews] = useState([]);
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log("jncdjdncjcdn");
        const allReviewsResponse = await reviewsAPI.fetchReviews();
        const allReviews = allReviewsResponse.reviews;
        setReviews(allReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleDelete = async (reviewId) => {
    try {
      await reviewsAPI.deleteReview(reviewId);
      const updatedReviews = reviews.filter(
        (review) => review._id !== reviewId
      );
      setReviews(updatedReviews);
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const handleUpdate = (reviewId) => {
    console.log(`Update review with ID ${reviewId}`);
  };

  const handleView = (reviewId) => {
    console.log(`View review with ID ${reviewId}`);
  };

  return (
    <div className="row">
      <div
        className="col-md-2 "
        style={{
          height: "1000px",
          backgroundColor: "#FFD600",
          marginTop: "-15px",
        }}
      >
        <Sidebar user={currentUser.status} />
      </div>
      <div className="reviews-container col-md-9">
        <h1>Reviews</h1>
        <table className="reviews-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>User</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews && reviews.length > 0 ? (
              reviews.map((review) => (
                <tr key={review._id}>
                  <td>{review.title}</td>
                  <td>{review.description}</td>
                  <td>{review.user}</td>
                  <td>
                    <div className="image-container">
                      {review.images.map((image, index) => (
                        <img
                          key={index}
                          src={`http://localhost:3000/api/images/${image
                            .split("\\")
                            .pop()}`}
                          alt={`Image ${index}`}
                          className="review-image"
                        />
                      ))}
                    </div>
                  </td>
                  <td>
                    <button
                      className=" btn btn-dark"
                      onClick={() => handleDelete(review._id)}
                    >
                      <span style={{ color: "#FFDE59" }}>Delete</span>
                    </button>
                    {/* <button
                      className="action-button"
                      onClick={() => handleUpdate(review._id)}
                    >
                      Update
                    </button>
                    <button
                      className="action-button"
                      onClick={() => handleView(review._id)}
                    >
                      View
                    </button> */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No reviews found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminReviews;
