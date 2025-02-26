import { useContext } from "react";
import { currentuserContext } from "../contexts/CurrentUserContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const currentUser = useContext(currentuserContext);

  if (currentUser._id) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
