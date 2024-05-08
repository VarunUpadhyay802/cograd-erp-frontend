import React from "react";

import AttendanceReportTable from "../Students/SingleStudent/AttendanceReportTable";
import TeacherAttendanceReportTable from "../Parent/TeacherAttendanceReportTable";
const TeacherAttendanceData = () => {
  return (
    <div>
      <div className="text-2xl font-bold mb-4">Attendance Report</div>
   
      <TeacherAttendanceReportTable />
    </div>
  );
};

export default TeacherAttendanceData;
