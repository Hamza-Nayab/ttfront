
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/users';

const usersAPI = {
  register: async (userData) => {
    console.log(userData);
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  login: async (loginData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, loginData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Get user profile
  getUserProfile: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${userId}/profile`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
   updateUser : async (userData) => {
    try {
      const response = await axios.put(`${BASE_URL}/seller/${userData._id}`, userData);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
  },

  updateProfile: async (userId, updatedData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${userId}/profile`, updatedData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

    deleteUser: async (userId) => {
        try {
          const response = await axios.delete(`${BASE_URL}/${userId}`);
          return response.data;
        } catch (error) {
          throw error.response.data;
        }
      },
    
      getAllUsers: async () => {
        try {
          const response = await axios.get(`${BASE_URL}`);
          return response.data;
        } catch (error) {
          throw error.response.data;
        }
      },
      getAllSellers: async () => {
        try {
          const response = await axios.get(`${BASE_URL}/user_seller`);
          return response.data;
        } catch (error) {
          throw error.response.data;
        }
      },
};

export default usersAPI;
