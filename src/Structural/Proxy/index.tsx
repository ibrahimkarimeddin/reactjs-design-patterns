import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface AuthProps {
  // Add any additional props your wrapped component may accept
}

export const withAuth = <P extends AuthProps>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuth: React.FC<P> = (props ) => {

    let navigate = useNavigate();

    useEffect(() => {

        const isAuthenticated = /* Check if the user is authenticated */ true;

        if(!isAuthenticated){
          navigate('/login')
        }
    }, []);



    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};


