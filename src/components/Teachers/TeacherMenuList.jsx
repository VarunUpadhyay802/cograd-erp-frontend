import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Link } from "react-router-dom";

const TeacherMenuList = ({ setMobileOpen }) => {
  return (
    <List>
      {[
        "Home",
        "Classes",
        "Subjects",
        "Attendance",
   
      
      ].map((text, index) => (
        <ListItem
          key={text}
          disablePadding
          sx={{
            display: "block",
            "&:hover": { bgcolor: "#6F52ED" },
            transition: "all 0.3s ease-in-out",
          }}
          component={Link} // Use Link component from react-router-dom
          to={
            index === 0
              ? "/teacherHomePage"
              : index === 1
              ? null
              : index === 2
              ? null
              : index === 3
               ? "/teacher-mark-self":null
          } // Define the route to navigate to
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => setMobileOpen(false)}
          >
            <ListItemIcon sx={{ color: "white" }}>
              {index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <ClassOutlinedIcon />
              ) : index === 2 ? (
                <AssignmentIcon />
              ) : index === 3 ? (
                <PeopleAltIcon />
              ) : index === 4 ? (
                <PermContactCalendarIcon />
              ) : index === 5 ? (
                <ReceiptLongIcon />
              ) : (
                <EngineeringIcon />
              )}
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={{ color: "white", fontSize: "0.5rem" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TeacherMenuList;
