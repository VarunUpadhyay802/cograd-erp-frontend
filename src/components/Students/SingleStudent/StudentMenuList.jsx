import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Link } from "react-router-dom";

const StudentMenuList = (setMobileOpen) => {
  return (
    <List>
      {["Home", "Marks", "Attendance", "Complains"].map((text, index) => (
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
              ? "/"
              : index === 1
              ? "/marks"
              : index === 2
              ? "/studentAttendance"
              : "/studentComplains"
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
                <AssignmentIcon />
              ) : index === 2 ? (
                <CalendarTodayIcon />
              ) : (
                <ErrorOutlineIcon />
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

export default StudentMenuList;
