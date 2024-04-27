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
import HomeIcon from "@mui/icons-material/Home";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountMenu from "../components/AccountMenu";
import useFetchUserFromJwt from "../utils/useFetchUserFromJwt";
import { useDispatch } from "react-redux";
import { clearUser } from "../utils/userSlice";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PropTypes from "prop-types";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

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

  const handleDrawerClose1 = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const navigate = useNavigate();

  useFetchUserFromJwt();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/school/logout", {
        method: "POST",
        credentials: "include", // Include cookies in the request
      });

      const data = await response.json();
      console.log("Logged out:", data.message);
      dispatch(clearUser());
      // Redirect to the login page after successful logout
      navigate("/schoolLogin");
    } catch (error) {
      console.error("Error logging out:", error);
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
    <div className=" lg:hidden bg-[#343a40] h-full">
      {/* <Toolbar /> */}
      <Link
        to={"/"}
        className="cursor-pointer"
        onClick={() => setMobileOpen(false)}
      >
        <div className="w-full flex items-center justify-center">
          <img
            src="logo.png"
            alt=""
            className="h-12 w-12 py-2 px-2 bg-[#6F52ED] rounded-sm my-4"
          />
        </div>
      </Link>
      <List>
        {[
          "Home",
          "Classes",
          "Subjects",
          "Teachers",
          "Students",
          "Transactions",
          "Staffs",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              display: "block",
              "&:hover": { bgcolor: "#FAA912" },
              transition: "all 0.3s ease-in-out",
            }}
            component={Link} // Use Link component from react-router-dom
            to={
              index === 0
                ? "/"
                : index === 1
                ? "/classes"
                : index === 2
                ? "/subjects"
                : index === 3
                ? "/teacherChoose"
                : index === 4
                ? "/students"
                : index === 5
                ? "/expenses"
                : "/staffs"
            } // Define the route to navigate to
          >
            <ListItemButton onClick={() => setMobileOpen(false)}>
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
      <Divider />
      <List>
        {["Profile", "Logout"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              display: "block",
              "&:hover": { bgcolor: "#FAA912" },
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
              onClick={index === 1 ? handleLogout : null} // Add onClick event handler
            >
              <ListItemIcon sx={{ color: "white" }}>
                {index === 0 ? <AccountCircleIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: "white", fontSize: "0.5rem" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="flex flex-col w-full overflow-hidden appearance-none">
      <Box sx={{ display: "flex", width: "100%" }}>
        <CssBaseline />
        <div className=" hidden lg:block">
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
                <div className="text-12 xs:text-14 sm:text-lg">
                  School Management System
                </div>
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
            <List>
              {[
                "Home",
                "Classes",
                "Subjects",
                "Teachers",
                "Students",
                "Transactions",
                "Staffs",
              ].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                  component={Link}
                  to={
                    index === 0
                      ? "/"
                      : index === 1
                      ? "/classes"
                      : index === 2
                      ? "/subjects"
                      : index === 3
                      ? "/teacherChoose"
                      : index === 4
                      ? "/students"
                      : index === 5
                      ? "/expenses"
                      : "/staffs"
                  }
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
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
                      sx={{ opacity: open ? 1 : 0, color: "white" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["Profile", "Logout"].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                  component={Link}
                  to={index === 0 ? "/profile" : ""}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={index === 1 ? handleLogout : null} // Add onClick event handler
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
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose1}
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
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};
