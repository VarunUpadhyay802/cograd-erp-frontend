import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const user = useSelector((state) => state.user._id);
  //   const userRole = useSelector((state) => state.user.role);

  if (!user) {
    return <Navigate to="/schoolLogin" replace={true}></Navigate>;
  }

  //   if (userRole && userRole !== "PRINCIPAL") {
  //     return <Navigate to="/" replace={true}></Navigate>;
  //   }
  return children;
}

export default Protected;
