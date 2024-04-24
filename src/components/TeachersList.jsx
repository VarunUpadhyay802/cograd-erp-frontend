import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom"; // For navigation

const TeachersList = ({ teacherList }) => {
  const navigate = useNavigate();

  const handleMakeClassTeacher = (teacherId) => {
    navigate(`/classTeacherRegistration/${teacherId}`); // Navigate to the Class Teacher registration page
  };

  return (
    <>
      {teacherList.map((teacher, index) => (
        <Card className="mt-6 w-96 bg-red-100" key={index}>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {teacher.name}
            </Typography>
            <Typography>
              Subjects:
              {teacher.teachSubjects.map((subject, index) => (
                <ul key={index}>
                  <li>{subject._id}</li>
                </ul>
              ))}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="font-mono text-rose-950"
              onClick={() => handleMakeClassTeacher(teacher._id)} // Pass the teacher ID
            >
              Make Class Teacher
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default TeachersList;
