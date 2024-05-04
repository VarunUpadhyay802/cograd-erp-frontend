import { useNavigate } from "react-router-dom";
import { Grid, Paper, Box, Container } from "@mui/material";
import {
  AccountCircle,
  School,
  Group,
  SupervisorAccount,
  AdminPanelSettings,
} from "@mui/icons-material";
import styled from "styled-components";

const ChooseUser = () => {
  const navigate = useNavigate();

  const navigateHandler = (user) => {
    switch (user) {
      case "Principal":
        navigate("/schoolLogin"); // Example route for admin login
        break;
      case "Parent":
        navigate("/parentLogin"); // Example route for admin login
        break;
      case "Student":
        navigate("/studentLogin"); // Example route for student login
        break;
      case "Teacher":
        navigate("/teacherLogin"); // Example route for teacher login
        break;
      case "ClassTeacher":
        navigate("/classTeacherLogin"); // Example route for class teacher login
        break;
      case "SchoolAdmin":
        navigate("/schoolAdminLogin"); // Example route for school admin login
        break;
      default:
        console.error("Unknown user role");
    }
  };

  return (
    <StyledContainer>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper
              onClick={() => navigateHandler("Principal")}
              elevation={3}
            >
              <Box mb={2}>
                <AccountCircle fontSize="large" />
              </Box>
              <StyledTypography>Principal</StyledTypography>
              Login as a Principal to access the dashboard to manage app data.
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper
              onClick={() => navigateHandler("Parent")}
              elevation={3}
            >
              <Box mb={2}>
                <AccountCircle fontSize="large" />
              </Box>
              <StyledTypography>Parent</StyledTypography>
              Login as a Parent to see Your student's progress
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper
              onClick={() => navigateHandler("Student")}
              elevation={3}
            >
              <Box mb={2}>
                <School fontSize="large" />
              </Box>
              <StyledTypography>Student</StyledTypography>
              Login as a Student to explore course materials and assignments.
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper
              onClick={() => navigateHandler("Teacher")}
              elevation={3}
            >
              <Box mb={2}>
                <Group fontSize="large" />
              </Box>
              <StyledTypography>Teacher</StyledTypography>
              Login as a Teacher to create courses, assignments, and track
              student progress.
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper
              onClick={() => navigateHandler("ClassTeacher")}
              elevation={3}
            >
              <Box mb={2}>
                <SupervisorAccount fontSize="large" />
              </Box>
              <StyledTypography>Class Teacher</StyledTypography>
              Login as a Class Teacher to manage your class and student
              interactions.
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StyledPaper
              onClick={() => navigateHandler("SchoolAdmin")}
              elevation={3}
            >
              <Box mb={2}>
                <AdminPanelSettings fontSize="large" />
              </Box>
              <StyledTypography>School Admin</StyledTypography>
              Login as a School Admin to oversee school operations.
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: linear-gradient(to bottom, #411d70, #19118b);
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #1f1f38;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover {
    background-color: #2c2c6c;
    color: white;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;
