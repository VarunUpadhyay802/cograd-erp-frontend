import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import EngineeringIcon from "@mui/icons-material/Engineering";
// import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountMenu from "../components/AccountMenu";
import useFetchUserFromJwt from "../utils/useFetchUserFromJwt";
import { clearUser } from "../utils/userSlice";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PropTypes from "prop-types";
// import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { clearStudent } from "../utils/studentSlice";
import { useDispatch } from "react-redux";
import SchoolMenuList from "../components/School/SchoolMenuList";
import StudentMenuList from "../components/Students/SingleStudent/StudentMenuList";
import TeacherMenuList from "../components/Teachers/TeacherMenuList";
import ClassTeacherMenuList from "../components/ClassTeacher/ClassTeacherMenuList"; // Add Class Teacher menu list
import ParentMenuList from "../components/Parent/ParentMenuList"; // Add Parent menu list

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#343a40",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: "#343a40",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar1 = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer1 = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  background: "#343a40",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function HomePage(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();
  useFetchUserFromJwt();
  const dispatch = useDispatch();
  const detectUserRole = () => {
    const schoolToken = Cookies.get("token"); // for principals
    const studentToken = Cookies.get("studentToken"); // for students
    const teacherToken = Cookies.get("teacherToken"); // for teachers
    const classTeacherToken = Cookies.get("classTeacherToken"); // for class teachers
    const parentToken = Cookies.get("parentToken"); // for class teachers

    if (schoolToken) {
      return { token: schoolToken, role: "PRINCIPAL" };
    } else if (parentToken) {
      return { token: parentToken, role: "PARENT" };
    } else if (studentToken) {
      return { token: studentToken, role: "STUDENT" };
    } else if (teacherToken) {
      return { token: teacherToken, role: "TEACHER" };
    } else if (classTeacherToken) {
      return { token: classTeacherToken, role: "CLASS-TEACHER" };
    } else {
      return null;
    }
  };

  const userToken = detectUserRole();
  const token = userToken?.token;
  const role = userToken?.role;

  const handleLogout = async () => {
    try {
      // Identify the correct endpoint based on the user role
      const endpointMap = {
        PRINCIPAL: "school",
        STUDENT: "student",
        TEACHER: "teacher",
        // In JavaScript, hyphens are not allowed in variable names  so have to make it a string
        "CLASS-TEACHER": "classTeacher", // Endpoint for class teachers
        PARENT: "parent",
      };

      const endpoint = endpointMap[role];

      if (!endpoint) {
        throw new Error("Invalid role"); // Handle unexpected roles
      }

      // Send a POST request to the appropriate logout endpoint
      const response = await fetch(`http://localhost:4000/${endpoint}/logout`, {
        method: "POST",
        credentials: "include", // Include cookies in the request
      });

      if (!response.ok) {
        throw new Error("Failed to logout"); // Handle non-OK responses
      }

      // Clear user-specific data from Redux or other state management
      dispatch(clearUser()); // Adjust this to clear the correct slice of state

      const data = await response.json();
      console.log("Logged out:", data.message);

      // Redirect to the login or choose user page after successful logout
      navigate("/chooseUser");
    } catch (error) {
      console.error("Error logging out:", error);
      // Optionally, show an error message to the user
    }
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className="lg:hidden bg-[#343a40] h-full">
      <Link
        to="/"
        className="cursor-pointer"
        onClick={() => setMobileOpen(false)}
      >
        <div className="w-full flex items-center justify-center">
          <img
            src="logo.png"
            alt="Logo"
            className="h-12 w-12 py-2 px-2 bg-[#6F52ED] rounded-sm my-4"
          />
        </div>
      </Link>
      {role === "PRINCIPAL" && <SchoolMenuList setMobileOpen={setMobileOpen} />}
      {role === "STUDENT" && <StudentMenuList setMobileOpen={setMobileOpen} />}
      {role === "TEACHER" && <TeacherMenuList setMobileOpen={setMobileOpen} />}
      {role === "CLASS-TEACHER" && (
        <ClassTeacherMenuList setMobileOpen={setMobileOpen} />
      )}
      {role === "PARENT" && <ParentMenuList setMobileOpen={setMobileOpen} />}
      <Divider />
      <List>
        {["Profile", "Logout"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              display: "block",
              "&:hover": { bgcolor: "#6F52ED" },
              transition: "all 0.3s ease-in-out",
            }}
            component={Link}
            to={index === 0 ? "/profile" : ""}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={index === 1 ? handleLogout : null}
            >
              <ListItemIcon sx={{ color: "white" }}>
                {index === 0 ? <AccountCircleIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="flex flex-col w-full overflow-hidden appearance-none">
      <Box sx={{ display: "flex", width: "100%" }}>
        <CssBaseline />
        <div className="hidden lg:block">
          <AppBar1 position="fixed" open={open} sx={{ background: "#343a40" }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <div className="flex justify-between items-center w-full">
                <Typography variant="h6">School Management System</Typography>
                <AccountMenu />
              </div>
            </Toolbar>
          </AppBar1>
          <Drawer1
            variant="permanent"
            open={open}
            sx={{ background: "#343a40" }}
          >
            <DrawerHeader>
              <div className="w-full flex items-center justify-center">
                <img
                  src="logo.png"
                  alt=""
                  className="h-12 w-12 py-2 px-2 bg-[#6F52ED] rounded-sm"
                />
              </div>
              <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            {role === "PRINCIPAL" && (
              <SchoolMenuList setMobileOpen={setMobileOpen} />
            )}
            {role === "STUDENT" && (
              <StudentMenuList setMobileOpen={setMobileOpen} />
            )}
            {role === "TEACHER" && (
              <TeacherMenuList setMobileOpen={setMobileOpen} />
            )}
            {role === "CLASS-TEACHER" && (
              <ClassTeacherMenuList setMobileOpen={setMobileOpen} />
            )}
            {role === "PARENT" && (
              <ParentMenuList setMobileOpen={setMobileOpen} />
            )}
            <Divider />
            <List>
              {["Profile", "Logout"].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{
                    display: "block",
                    "&:hover": { bgcolor: "#6F52ED" },
                    transition: "all 0.3s ease-in-out",
                  }}
                  component={Link}
                  to={index === 0 ? "/profile" : "/chooseUser"}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={index === 1 ? handleLogout : null}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      {index === 0 ? <AccountCircleIcon /> : <LogoutIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0, color: "white" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer1>
        </div>
        <div className="lg:hidden bg-[#343a40]">
          <AppBar
            position="fixed"
            sx={{
              width: { lg: `calc(100% - ${drawerWidth}px)` },
              ml: { lg: `${drawerWidth}px` },
              background: "#343a40",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { lg: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <div className="flex justify-between items-center w-full">
                <Typography variant="h6" noWrap component="div">
                  School Management System
                </Typography>
                <AccountMenu />
              </div>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{
              width: { lg: drawerWidth },
              flexShrink: { lg: 0 },
              background: "#343a40",
            }}
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", lg: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", lg: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
        </div>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            bgcolor: "#F8F8FB",
            maxWidth: "100vw",
          }}
        >
          <DrawerHeader />
          <div className="w-full">
            <Outlet />
          </div>
        </Box>
      </Box>
    </div>
  );
}

HomePage.propTypes = {
  window: PropTypes.func,
};
