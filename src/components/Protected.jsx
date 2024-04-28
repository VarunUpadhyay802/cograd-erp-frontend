import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

function Protected({ children }) {
  const user = useSelector((state) => state.user._id);
  const fetching = useSelector((state) => state.user.isFetching);
  //   const userRole = useSelector((state) => state.user.role);

  useEffect(() => {
    if (!user && !fetching) {
      // Navigate if user is not logged in and fetching is done
      navigateToLogin();
    }
  }, [fetching, user]);

  const navigateToLogin = () => {
    return <Navigate to="/schoolLogin" replace={true}></Navigate>;
  };

  //   if (userRole && userRole !== "PRINCIPAL") {
  //     return <Navigate to="/" replace={true}></Navigate>;
  //   }
  return children;
}

export default Protected;
