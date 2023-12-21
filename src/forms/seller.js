import React, { useState, useRef } from 'react';
import usersAPI from '../apis/users';

function SellerForm() {
  const [error, setError] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));



  const locationRef = useRef(null);
  const phoneRef = useRef(null);
  const descriptionRef = useRef(null);


  const handleSellerRegistration = async (e) => {
    e.preventDefault();
    setError('');

    const locationValue = locationRef.current.value;
    const phoneValue = phoneRef.current.value;
    const descriptionValue = descriptionRef.current.value;

    try {
      const updatedUserData = {
        ...user,
        location: locationValue,
        phone: phoneValue,
        description: descriptionValue,
        status: 'Seller',
      };

      const updatedUser = await usersAPI.updateUser(updatedUserData);
      console.log('User updated:', updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser.user));
      window.location.href = '/';

    } catch (error) {
      console.error('Seller registration error:', error);
      setError(`Error ${error.message}`);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form
        className="border p-4"
        style={{ maxWidth: '500px', width: '100%' }}
        onSubmit={handleSellerRegistration}
      >
        <h2 className="mb-4">Seller Registration</h2>
        {error && <p className="text-danger">{error}</p>}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: {user.fullName}
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input type="text" className="form-control" id="location" ref={locationRef} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input type="text" className="form-control" id="phone" ref={phoneRef} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            ref={descriptionRef}
            rows="5"
            required
          ></textarea>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-dark" type="submit">
            <span style={{ color: '#FFDE59' }}>Register as Seller</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SellerForm;
