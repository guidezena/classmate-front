import React from "react";
import {
  Route as ReactDomRoute,
  RouteProps as ReactDomRouteProps,
} from "react-router-dom";

interface RouteProps extends ReactDomRouteProps {
  component: React.ComponentType;
}

export const Route: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <ReactDomRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
};
