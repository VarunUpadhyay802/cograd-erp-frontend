import { Link } from "react-router-dom";

const TeacherOptions = () => {
  return (
    <>
      <Link to="/teacherAttendance">Attendance</Link>
      <br />
      <Link to="/teacherRegistration"> Registration form </Link>
    </>
  );
};

export default TeacherOptions;
