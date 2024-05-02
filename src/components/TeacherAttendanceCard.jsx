import React, { useState } from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

const TeacherAttendanceCard = ({ teacherName, teacherId }) => {
  const [attendanceStatus, setAttendanceStatus] = useState(null); // Initial state for attendance status

  const markAttendance = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/teacherReg/markSelf",
        {
          date: dayjs().format("YYYY-MM-DD"), // Today's date
          status: "p", // Default status: Present
        },
        {
          withCredentials: true, // Include authentication cookies
        }
      );
      
      if (response.status === 201) {
        setAttendanceStatus("Present");
      }
    } catch (error) {
      console.error("Error marking attendance:", error);
      setAttendanceStatus("Error marking attendance");
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {teacherName}
        </Typography>
        
        <Typography color="text.secondary">
          Status: {attendanceStatus ? attendanceStatus : "Not Marked"}
        </Typography>

        <Button variant="contained" color="primary" onClick={markAttendance}>
          Mark Attendance
        </Button>
      </CardContent>
    </Card>
  );
};

export default TeacherAttendanceCard;
