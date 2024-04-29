import React from "react";
import AttendanceReport from "../../../components/Students/SingleStudent/AttendanceReport";
import AttendanceReportTable from "../../../components/Students/SingleStudent/AttendanceReportTable";

const StudentAttendanceReport = () => {
  return (
    <div>
      <div className="text-2xl font-bold mb-4">Attendance Report</div>
      <AttendanceReport width={400} height={200} />
      <AttendanceReportTable />
    </div>
  );
};

export default StudentAttendanceReport;
