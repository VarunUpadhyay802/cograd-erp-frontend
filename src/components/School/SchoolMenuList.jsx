/* eslint-disable react/prop-types */
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PersonAddSharpIcon from "@mui/icons-material/PersonAddSharp";
import { Link } from "react-router-dom";
import EscalatorWarningSharpIcon from "@mui/icons-material/EscalatorWarningSharp";
const SchoolMenuList = ({ setMobileOpen }) => {
  return (
    <List>
      {[
        "Home",
        "Classes",
        "Subjects",
        "Teachers",
        "Students",
        "Students-2",
        "Parents",
        "Extra",
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
              ? "/"
              : index === 1
              ? "/classes"
              : index === 2
              ? "/subjectsOption"
              : index === 3
              ? "/teacherChoose"
              : index === 4
              ? "/students"
              : index === 5
              ? "/students-2"
              : index === 6
              ? "/parentRegistration"
              : index === 7
              ? "/extra"
              : null
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
              ) : index == 6 ? (
                <EscalatorWarningSharpIcon />
              ) : index == 7 ? (
                <PersonAddSharpIcon />
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

export default SchoolMenuList;
