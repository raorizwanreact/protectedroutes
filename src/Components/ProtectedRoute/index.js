import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../../context/UserContext";

const ProtectRoute = ({ children }) => {
  const { checkUser } = useCreateAuthStateContext();

  if (checkUser) {
    return <Navigate to="/cart" />;
  }
  return children;
};
export default ProtectRoute;
