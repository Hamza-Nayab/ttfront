import { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import reviewsAPI from "../apis/review";
function Profile() {

  const locat = useLocation();
  console.log(locat);
  const { seller } = locat.state;
  console.log(seller);

  const fullName = seller?.fullName || "";
  const sellerId = seller?._id || "";
  const email = seller?.email || "";
  const location = seller?.location || "";
  const phone = seller?.phone||"";
  const description = seller?.description||"";
  const [reviews1, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const review3 = await reviewsAPI.fetchReviews();
        const review =review3.reviews; 
        var reviews;
        if (review) {
          reviews = review.filter(rev => rev.seller ===sellerId );
          setReviews(reviews);
          console.log("Reviews : ", reviews);



        }
       
        
        console.log("Users : ", reviews);
  
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchReviews();
  }, []);




  return (
    <div className="container">
      <div className="main-body">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="javascript:void(0)">User</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              User Profile
            </li>
          </ol>
        </nav>
        {/* /Breadcrumb */}

        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card" style={{ backgroundColor: "white" }}>
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3" style={{ color: "black" }}>
                    <h4>{fullName}</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">
                      Bay Area, San Francisco, CA
                    </p>
                    <button className="btn btn-dark col-md-9">
                      <Link to="/submit" state={{seller:seller}}>
                        <span style={{ color: "#FFDE59" }}>
                          Submit a review
                        </span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="feather feather-globe mr-2 icon-inline"></i>
                    Website
                  </h6>
                  <span className="text-secondary">hamzanayab.com</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="feather feather-github mr-2 icon-inline"></i>
                    Github
                  </h6>
                  <span className="text-secondary">hamzanayab</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="feather feather-twitter mr-2 icon-inline text-info"></i>
                    Twitter
                  </h6>
                  <span className="text-secondary">@hamzanayabb</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="feather feather-instagram mr-2 icon-inline text-danger"></i>
                    Instagram
                  </h6>
                  <span className="text-secondary">hamzanayabb</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="feather feather-facebook mr-2 icon-inline text-primary"></i>
                    Facebook
                  </h6>
                  <span className="text-secondary">bootdey</span>
                </li>
              </ul>
            </div>
            <div className="row gutters-sm mt-4">
              <div className="col-md-12 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3">Skills</h6>
                    <small>Web Design</small>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning" // Change bg-primary to bg-warning for yellow color
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Website Markup</small>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning" // Change bg-primary to bg-warning for yellow color
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>One Page</small>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning" // Change bg-primary to bg-warning for yellow color
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Mobile Template</small>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning" // Change bg-primary to bg-warning for yellow color
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Backend API</small>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning" // Change bg-primary to bg-warning for yellow color
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gutters-sm mt-4">
              <div className="col-md-12 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3">Reviews</h6>
                    <small>5 Stars</small>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning" // Change bg-primary to bg-warning for yellow color
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>4 Stars</small>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning" // Change bg-primary to bg-warning for yellow color
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>3 stars</small>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning" // Change bg-primary to bg-warning for yellow color
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>2 Stars</small>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning" // Change bg-primary to bg-warning for yellow color
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>1 Star</small>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning" // Change bg-primary to bg-warning for yellow color
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9" style={{ color: "#FFDE59" }}>
                    {fullName}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9" style={{ color: "#FFDE59" }}>
                    {email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9" style={{ color: "#FFDE59" }}>
                    {phone}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9" style={{ color: "#FFDE59" }}>
                    {phone}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9" style={{ color: "#FFDE59" }}>
                    {location}
                  </div>
                </div>
                <hr />
              </div>
            </div>

{
  reviews1.map((rev)=>(

    <div>
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-12">
          <div className="row p-2 bg-white border rounded">
            <div className="col-md-3 mt-1">
              <img
                className="img-fluid img-responsive rounded product-image"
                src={`http://localhost:5000/api/images/${rev.images[0].split('\\').pop()}`}
                alt="Product 1"
              />
            </div>


            <div className="col-md-6 mt-1">
              <h5>{rev.title}</h5>
              <div className="d-flex flex-row">
                
              {[...Array(rev.rating)].map((_, index) => (
                    <span key={index} className="fa fa-star checked"></span>
                  ))}
              </div>
              <p className="text-justify text-truncate para mb-0">
                {rev.description}
                <br />
                <br />
              </p>
            </div>
            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
              <div className="d-flex flex-column mt-4">
                <button
                  className="btn btn-dark text-warning"
                  type="button"
                >
                  Helpful?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ))
}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
