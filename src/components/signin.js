import React, { useState, useRef } from 'react';
import usersAPI from '../apis/users';

function Signin() {
  const [isRegistration, setIsRegistration] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const fullNameRef = useRef(null);
  const profileImageRef = useRef(null);

  const toggleForm = () => {
    setError('');
    setIsRegistration(!isRegistration);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (isRegistration) {
      const confirmPasswordValue = confirmPasswordRef.current.value;
      const fullNameValue = fullNameRef.current.value;
      const profileImageFile = profileImageRef.current.files[0];

      const formData = new FormData();
      formData.append('fullName', fullNameValue);
      formData.append('email', emailValue);
      formData.append('password', passwordValue);
      formData.append('status', 'Buyer');
      formData.append('profileImage', profileImageFile);

      try {
        const userData = await usersAPI.register(formData);
        console.log('Registration successful:', userData);
        setIsRegistration(false);
        localStorage.setItem('user', JSON.stringify(userData.user));

        //window.location.href = '/';
      } catch (error) {
        console.error('Registration error:', error);
        setError(`Error ${error.message}`);
      }
    } else {
      try {


        const userData = await usersAPI.login({
          email: emailValue,
          password: passwordValue,
        });


        console.log('Login successful:', userData);
        localStorage.setItem('user', JSON.stringify(userData.user));
        console.log(userData.token);
        localStorage.setItem('token',JSON.stringify(userData.token));
         
        // Redirect to home after successful login (using React Router's history.push('/'))
        // history.push('/');
        window.location.href = '/';
      } catch (error) {
        console.error('Login error:', error);
        setError('Invalid credentials. Please try again.');
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form
        className="border p-4"
        style={{ maxWidth: '500px', width: '100%' }}
        onSubmit={handleFormSubmit}
      >
        <h2 className="mb-4">{isRegistration ? 'Register' : 'Sign In'}</h2>
        {error && <p className="text-danger">{error}</p>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" ref={emailRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" ref={passwordRef} />
        </div>
        {isRegistration && (
          <>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input type="password" className="form-control" id="confirmPassword" ref={confirmPasswordRef} />
            </div>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="fullName" ref={fullNameRef} />
            </div>
            <div className="mb-3">
              <label htmlFor="profileImage" className="form-label">
                Profile Image
              </label>
              <input
                type="file"
                className="form-control"
                id="profileImage"
                ref={profileImageRef}
                accept="image/*"
              />
            </div>
          </>
        )}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember Me
          </label>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-dark" type="submit">
            <span style={{ color: '#FFDE59' }}>{isRegistration ? 'Register' : 'Log In'}</span>
          </button>
          <button className="btn btn-dark" type="button" onClick={toggleForm}>
            <span style={{ color: '#FFDE59' }}>{isRegistration ? 'Back to Sign In' : 'Register'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
