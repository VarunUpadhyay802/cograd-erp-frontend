import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom"; // For navigation
import { motion } from 'framer-motion'; // For animations and transitions

const TeachersList = ({ teacherList }) => {
  const navigate = useNavigate();

  const handleMakeClassTeacher = (teacherId) => {
    navigate(`/classTeacherRegistration/${teacherId}`); // Navigate to the Class Teacher registration page
  };

  return (
    <>
    
      {teacherList.map((teacher, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }} // Scale up the card slightly on hover
          transition={{ type: "spring", stiffness: 200, damping: 10 }} // Spring-like transition
        className="border border-gray-200 rounded-lg shadow p-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <Card className="bg-gray-200 rounded-md ">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {teacher.name}
              </Typography>
              <Typography>
                Subjects:
                <ul>
                  {teacher.teachSubjects.map((subject, index) => (
                    <li key={index}>{subject._id}</li>
                  ))}
                </ul>
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
        </motion.div>
      ))}
    </>
  );
};

export default TeachersList;
