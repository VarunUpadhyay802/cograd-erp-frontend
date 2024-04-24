import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const TeachersList = ({ teacherList }) => {
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
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default TeachersList;
