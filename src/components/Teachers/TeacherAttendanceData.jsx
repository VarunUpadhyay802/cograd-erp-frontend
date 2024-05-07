import React from "react";
import AttendanceReport from "../Students/SingleStudent/AttendanceReport";
import AttendanceReportTable from "../Students/SingleStudent/AttendanceReportTable";

const TeacherAttendanceData = () => {
  return (
    <div>
      <div className="text-2xl font-bold mb-4">Attendance Report</div>
      <AttendanceReport width={400} height={200} />
      <AttendanceReportTable />
    </div>
  );
};

export default TeacherAttendanceData;
