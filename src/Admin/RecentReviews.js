import React, { useState, useEffect } from 'react';
import reviewAPI from '../apis/review'; 

function RecentReviews() {
  const [recentReviews, setRecentReviews] = useState([]);

  useEffect(() => {
    const fetchRecentReviews = async () => {
      try {
        const response = await reviewAPI.getRecentReviews(); 
        setRecentReviews(response.data.reviews);
      } catch (error) {
        console.error('Error fetching recent reviews:', error);
      }
    };

    fetchRecentReviews();
  }, []);

  return (
    <div className="container">
      <h1>Recent Reviews</h1>
      <div className="recent-reviews">
        {recentReviews.map((review) => (
          <div key={review._id} className="review">
            <h2>{review.title}</h2>
            <p>Description: {review.description}</p>
            <p>User: {review.user}</p>
            <div className="images">
              {review.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
              ))}
            </div>
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentReviews;
