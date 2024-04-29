import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { fetchUserStart, setUser } from "./userSlice";
import { jwtDecode } from "jwt-decode";
import { setStudent } from "./studentSlice";
const useFetchUserFromJwt = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) {
      dispatch(fetchUserStart());
      console.log(cookies.token);
      const decodedToken = jwtDecode(cookies.token);
      console.log(decodedToken);
      if (decodedToken.role === "PRINCIPAL") {
        dispatch(
          setUser({
            isAuthenticated: true,
            _id: decodedToken.id,
            schoolName: decodedToken.schoolName,
            role: decodedToken.role,
            email: decodedToken.email,
          })
        );
      } else if (decodedToken.role === "STUDENT") {
        dispatch(
          setStudent({
            isAuthenticated: true,
            studentId: decodedToken.id,
            name: decodedToken.name,
            role: decodedToken.role,
            email: decodedToken.email,
          })
        );
      }
    }
  }, [cookies.token, dispatch]);
};

export default useFetchUserFromJwt;
