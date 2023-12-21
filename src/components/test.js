import { useState } from "react";

function Test() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: 0,
    images: [],
  });

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
      images: uploadedImages,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission here
    console.log(formData);
  };

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <ul className="nav">
      <li className="nav-item nav-profile">
        <a href="#" className="nav-link">
          <div className="nav-profile-image">
            <img src="assets/images/faces/face1.jpg" alt="profile" />
            <span className="login-status online"></span>
          </div>
          <div className="nav-profile-text d-flex flex-column">
            <span className="font-weight-bold mb-2">David Grey. H</span>
            <span className="text-secondary text-small">Project Manager</span>
          </div>
          <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
        </a>
      </li>
      {/* Rest of your list items */}
      {/* ... */}
      <li className="nav-item sidebar-actions">
        <span className="nav-link">
          <div className="border-bottom">
            <h6 className="font-weight-normal mb-3">Projects</h6>
          </div>
          <button className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a project</button>
          <div className="mt-4">
            <div className="border-bottom">
              <p className="text-secondary">Categories</p>
            </div>
            <ul className="gradient-bullet-list mt-4">
              <li>Free</li>
              <li>Pro</li>
            </ul>
          </div>
        </span>
      </li>
    </ul>
  </nav>
  );
}

export default Test;
