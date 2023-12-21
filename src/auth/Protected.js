import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthFailed from './AuthFailed'; 

const Protected = ({ children, allowedStatus, currentUser }) => {
  console.log("Current User:", currentUser);
  if (allowedStatus.includes(currentUser)) {
    return children;
  } else {
    return (<>
      
      <Navigate
        to={`/authfailed?message=You are not allowed for this route. Please log in as one of the allowed statuses`}
        replace
      />
      
      </>
      
    );
  }
};

export default Protected;
