import { Link } from "react-router-dom";

const ClassTeacherDashBoard = () => {
  return (
    <>
      <div className="font-bold">classTeacherDashBoard</div>
      <Link to="/student-mark">Student Attendance</Link>
      <br />
      <Link to="/student-exams">Exams-page pending- <span className="font-bold text-32 ">SURAJ MAHESHWARI BHADWA</span></Link>
      <br />
   
    </>
  );
};

export default ClassTeacherDashBoard;
