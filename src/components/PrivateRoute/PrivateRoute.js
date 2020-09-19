import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [loggedIn,setLoggedIn] = useContext(userContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          (loggedIn.email) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;