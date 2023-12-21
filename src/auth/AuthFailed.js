import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AuthFailed = () => {
  const location = useLocation();
  const message = new URLSearchParams(location.search).get('message') || '';

  return (
    <div>
      <h3>Authentication Failed</h3>
      <p>{message}</p>
      <p>
        Please <Link to="/signin">log in</Link> as the specified user status.
      </p>
    </div>
  );
};

export default AuthFailed;
