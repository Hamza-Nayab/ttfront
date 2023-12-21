import cad1 from "../Img/c1.jpg";
import cad2 from "../Img/c2.jpg";
import cad3 from "../Img/c3.jpg";

import cad6 from "../Img/c6.jpg";
import cad7 from "../Img/2.png";

function Review() {
 
  return (
    // <>
    //   {demo.map((dm) => (

    //   ))}
    // </>
    <>
      <div className="container" style={{marginBottom :"30px"}}>
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <div>
              <h2>Our Users</h2>
              <p>
                Explore the testimonials from our satisfied users. Their
                feedback speaks volumes about the quality of our service and
                dedication to excellence.
              </p>
            </div>
          </div>

          {/* Column for the carousel */}
          <div className="col-md-9">
            <div style={{ height: "55vh", backgroundColor: "whitesmoke" }}>
              <div
                id="multiSlider"
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
                        <div className="col-md-6">
                          <div className="card mb-3">
                            <img
                              src={cad1}
                              className="card-img-top"
                              alt="Title 1"
                            />
                            <div className="card-body">
                              <h5 className="card-title">John wick</h5>
                              <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card mb-3">
                            <img
                              src={cad2}
                              className="card-img-top"
                              alt="Title 2"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Naruto</h5>
                              <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card mb-3">
                            <img
                              src={cad3}
                              className="card-img-top"
                              alt="Title 3"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Levi ack</h5>
                              <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card mb-3">
                            <img
                              src={cad6}
                              className="card-img-top"
                              alt="Title 4"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Kenpachi</h5>
                              <p className="card-text">Meow!!!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#multiSlider"
                  data-bs-slide="prev"
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
                  data-bs-target="#multiSlider"
                  data-bs-slide="next"
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
        </div>
      </div>
    </>
  );
}

export default Review;


// import React, { useState, useEffect } from 'react';
// import reviewsAPI from '../apis/review';

// function Review() {





//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {


//     const fetchReviews = async () => {
//       try {
//         const allReviewsResponse = await reviewsAPI.fetchReviews();
//         const allReviews = allReviewsResponse.reviews; 
//         setReviews(allReviews);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, []);


  

//   return (
//     <div className="container">
//       <div className="row">
//         {reviews.map((review) => (
//           <div key={review._id} className="col-md-6">
//             <div className="card mb-3">
          
//                       <img
                      
//                         src={`http://localhost:5000/api/images/${review.images[0].split('\\').pop()}`}
//                         alt={`Image`}
//                         className="card-img-top" 

//                       />
                 
            
//               <div className="card-body">
//                 <h5 className="card-title">{review.user}</h5>
//                 <p className="card-text">{review.description}</p>
//                 <div className="stars">
//                   {[...Array(review.rating)].map((_, index) => (
//                     <span key={index} className="fa fa-star checked"></span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Review;


// return (
//   // <>
//   //   {demo.map((dm) => (

//   //   ))}
//   // </>
//   <>
//     <div className="container" style={{marginBottom :"30px"}}>
//       <div className="row">
//         {/* Column for the remaining space */}
//         <div className="col-md-3 d-flex justify-content-center align-items-center">
//           <div>
//             <h2>Our Users</h2>
//             <p>
//               Explore the testimonials from our satisfied users. Their
//               feedback speaks volumes about the quality of our service and
//               dedication to excellence.
//             </p>
//           </div>
//         </div>

//         {/* Column for the carousel */}
//         <div className="col-md-9">
//           <div style={{ height: "55vh", backgroundColor: "whitesmoke" }}>
//             <div
//               id="multiSlider"
//               className="carousel slide bg-ffde59"
//               data-bs-ride="carousel"
//               style={{ maxWidth: "65vw", marginTop: "20px" }}
//             >
//               <style>
//                 {`
//                 .bg-ffde59 {
//                   background-color: whitesmoke;
//                 }

//                 .carousel-inner .card {
//                   background-color: #ffde59; /* Set card background color */
//                 }

//                 .card img {
//                   max-width: 100%; 
//                   height: auto; 
//                 }

//                 .card-title {
//                   font-size: 125%;
//                 }
//               `}
//               </style>
//               <div className="carousel-inner">
//                 <div className="carousel-item active">
//                   <div className="container">
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="card mb-3">
//                           <img
//                             src={cad1}
//                             className="card-img-top"
//                             alt="Title 1"
//                           />
//                           <div className="card-body">
//                             <h5 className="card-title">John wick</h5>
//                             <p className="card-text">
//                               Lorem ipsum dolor sit amet, consectetur
//                               adipiscing elit. Sed do eiusmod tempor
//                               incididunt ut labore et dolore magna aliqua
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="card mb-3">
//                           <img
//                             src={cad2}
//                             className="card-img-top"
//                             alt="Title 2"
//                           />
//                           <div className="card-body">
//                             <h5 className="card-title">Naruto</h5>
//                             <p className="card-text">
//                               Lorem ipsum dolor sit amet, consectetur
//                               adipiscing elit. Sed do eiusmod tempor
//                               incididunt ut labore et dolore magna aliqua
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="carousel-item">
//                   <div className="container">
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="card mb-3">
//                           <img
//                             src={cad3}
//                             className="card-img-top"
//                             alt="Title 3"
//                           />
//                           <div className="card-body">
//                             <h5 className="card-title">Levi ack</h5>
//                             <p className="card-text">
//                               Lorem ipsum dolor sit amet, consectetur
//                               adipiscing elit. Sed do eiusmod tempor
//                               incididunt ut labore et dolore magna aliqua
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="card mb-3">
//                           <img
//                             src={cad6}
//                             className="card-img-top"
//                             alt="Title 4"
//                           />
//                           <div className="card-body">
//                             <h5 className="card-title">Kenpachi</h5>
//                             <p className="card-text">Meow!!!</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#multiSlider"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   className="carousel-control-prev-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#multiSlider"
//                 data-bs-slide="next"
//               >
//                 <span
//                   className="carousel-control-next-icon"
//                   aria-hidden="true"
//                 ></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// );