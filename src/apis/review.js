import axios from "axios";
const API_URL = 'http://localhost:3000';

const reviewsAPI = {

 submitReview : async (reviewData, userData) => {
  const formData = new FormData();
  formData.append('title', reviewData.title);
  formData.append('description', reviewData.description);
  formData.append('sellerId',reviewData.sellerId);
  formData.append('rating', reviewData.rating);

  const promises = reviewData.images.map(async (imageBlobUrl) => {
    const response = await fetch(imageBlobUrl);
    const blob = await response.blob();
    const file = new File([blob], `image_${Date.now()}.png`, { type: blob.type });
    formData.append('images', file);
  });

  console.log(userData);
  formData.append('userId', userData._id);
  formData.append('username', userData.fullName);

  await Promise.all(promises);

  try {
    const response = await fetch(`${API_URL}/api/reviews`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to submit review');
    }
  } catch (error) {
    throw new Error(`Error submitting review: ${error.message}`);
  }
 },

 fetchReviews :async () => {
    try {
      const response = await fetch(`${API_URL}/api/reviews`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch reviews');
      }
    } catch (error) {
      throw new Error(`Error fetching reviews: ${error.message}`);
    }
  },
  
   deleteReview : async (reviewId) => {
    try {
      const response = await fetch(`${API_URL}/api/reviews/${reviewId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to delete review');
      }
    } catch (error) {
      throw new Error(`Error deleting review: ${error.message}`);
    }
  },
  
   updateReview : async (reviewId, updatedData) => {
    try {
      const response = await fetch(`${API_URL}/api/reviews/${reviewId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to update review');
      }
    } catch (error) {
      throw new Error(`Error updating review: ${error.message}`);
    }
  },

  getRecentReviews: async () => {

    try {
      const response = await axios.get(`${API_URL}/api/reviews/recent`);
      return response.data; 
    } catch (error) {
      throw new Error('Error fetching recent reviews');
    }
  },

};

export default reviewsAPI;