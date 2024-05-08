
import TeacherAttendanceReportTable from "./TeacherAttendanceReportTable";
import TeacherAttendanceReport from "./TeacherAttendanceReport";
const TeacherAttendanceData = () => {
  return (
    <div>
      <div className="text-2xl font-bold mb-4">Attendance Report</div>
      <TeacherAttendanceReport width={400} height={200}  /> 
      <TeacherAttendanceReportTable />
    </div>
  );
};

export default TeacherAttendanceData;
