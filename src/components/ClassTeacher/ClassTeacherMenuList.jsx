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
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Link } from "react-router-dom";

const ClassTeacherMenuList = ({ setMobileOpen }) => {
  return (
    <List>
      {["Home", "Classes", "Subjects", "Teachers", "Parents", "Students"].map(
        (text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              display: "block",
              "&:hover": { bgcolor: "#6F52ED" },
              transition: "all 0.3s ease-in-out",
            }}
            component={Link}
            to={
              index === 0
                ? "/classTeacherHomePage"
                : index === 1
                ? null
                : index === 2
                ? null
                : index === 3
                ? null
                : index === 4
                ? null
                : index === 5
                ? "/classteacher-att"
                : null
            } // Adjusted to reflect the new order and remove unnecessary routes
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "initial",
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
                ) : (
                  <ClassOutlinedIcon /> // Default icon for other routes
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: "white", fontSize: "0.5rem" }}
              />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  );
};

export default ClassTeacherMenuList;
