import React, { useState } from "react";
import reviewsAPI from "../apis/review";
import { useLocation } from "react-router-dom";
function Submit() {

  const location = useLocation();
  const {seller} = location.state;

  const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    sellerId:seller._id,
    rating: 0,
    images: [],
  });

  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const uploadedImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setFormData({
      ...formData,
      images: [...formData.images, ...uploadedImages],
    });
    e.target.value = null; // Clear the input for new file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await reviewsAPI.submitReview(formData,currentUser); 
      console.log('Review submitted successfully:', response);
      setFormData({
        title: "",
        description: "",
        sellerId:seller._id,
        rating: 0,
        images: [],
      });
    } catch (error) {
      console.error('Error submitting review:', error.message);
      // Handle error scenario
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center" style={{ height: "80vh" }}>
        <div className="col-md-8 border">
        <label htmlFor="title" className="form-label h3 mt-3">
                User Name : {seller.fullName}
              </label>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label h3 mt-3">
                Review Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label h4">
                Review Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="5"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label h5">Rating (out of 5)</label>
              <br />
              {[1, 2, 3, 4, 5].map((rating) => (
                <div key={rating} className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rating"
                    value={rating}
                    onChange={() => handleRatingChange(rating)}
                    checked={formData.rating === rating}
                  />
                  <label className="form-check-label">{rating}</label>
                </div>
              ))}
            </div>
            <div className="mb-3">
              <label htmlFor="images" className="form-label h5">
                Upload Images
              </label>
              <input
                type="file"
                className="form-control"
                id="images"
                name="images"
                accept="image/*"
                onChange={handleImageUpload}
                multiple
              />
            </div>
            <button type="submit" className="btn btn-dark text mb-3">
              <span style={{ color: "#FFDE59" }}>Submit Review</span>
            </button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        {formData.images.map((image, index) => (
          <div key={index} className="col-6 mb-3">
            <img
              src={image}
              alt={`Review Image ${index + 1}`}
              className="img-fluid"
            />
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <p>Number of Images: {formData.images.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Submit;
