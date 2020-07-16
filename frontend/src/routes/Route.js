import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouterWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = localStorage.getItem('user');

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!signed ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : 'notes',
                state: { from: location },
              }}
            />
          )
      }}
    />
  );
}
