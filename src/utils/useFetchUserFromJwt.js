import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserStart, setUser } from "./userSlice";
import { jwtDecode } from "jwt-decode";
import { setStudent } from "./studentSlice";
import Cookies from "js-cookie";
import { setParent } from "./parentAuthSlice";

const useFetchUserFromJwt = () => {
  const dispatch = useDispatch();
  const schoolToken = Cookies.get("token"); // for principals
  const studentToken = Cookies.get("studentToken"); // for students
  const teacherToken = Cookies.get("teacherToken"); // for teachers
  const classTeacherToken = Cookies.get("classTeacherToken"); // for class teachers
  const parentToken = Cookies.get("parentToken"); // for class teachers

  useEffect(() => {
    if (schoolToken) {
      // dispatch(fetchUserStart());
      const decodedToken = jwtDecode(schoolToken);
      console.log(decodedToken);

      dispatch(
        setUser({
          isAuthenticated: true,
          _id: decodedToken.id,
          schoolName: decodedToken.schoolName,
          role: decodedToken.role,
          email: decodedToken.email,
        })
      );
    } else if (studentToken) {
      const decodedToken = jwtDecode(studentToken);
      console.log(decodedToken);

      dispatch(
        setStudent({
          isAuthenticated: true,
          _id: decodedToken.id,
          name: decodedToken.name,
          role: decodedToken.role,
          email: decodedToken.email,
        })
      );
    } else if (parentToken) {
      const decodedToken = jwtDecode(parentToken);
      console.log(decodedToken);
      dispatch(
        setParent({
          isAuthenticated: true,
          parentId: decodedToken.id,
          name: decodedToken.name,
          role: decodedToken.role,
          email: decodedToken.email,
        })
      );
    }
  }, [schoolToken, parentToken, studentToken, dispatch]);
};

export default useFetchUserFromJwt;
