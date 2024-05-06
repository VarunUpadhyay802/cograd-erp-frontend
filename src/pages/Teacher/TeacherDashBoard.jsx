
import { Link } from "react-router-dom";

const TeacherDashBoard = () => {
  return (
    <>
      <Link to={"/teacher-mark-self"}>Mark your own attendance</Link>
      {/* <Link to={"/teacher-mark"}>Student Attendance</Link> */}
    
    </>
  );
};

export default TeacherDashBoard;
