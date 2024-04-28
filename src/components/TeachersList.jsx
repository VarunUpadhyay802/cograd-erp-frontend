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
        >
          <Card className="bg-slate-100">
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
