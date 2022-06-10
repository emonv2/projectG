import {
  Box,
  Dashboard,
  LayoutGridAdd,
  Logout,
  Plus,
  Settings,
} from "tabler-icons-react";
import Swal from "sweetalert2";

export const setting = {
  dashLink: [
    {
      id: 1,
      title: "Dashbord",
      icon: <Dashboard color="teal" />,
      url: "/dashbord",
    },
    {
      id: 2,
      title: "Add Post",
      icon: <Plus color="teal" />,
      url: "/dashbord/addpost",
    },
    {
      id: 3,
      title: "All Post",
      icon: <Box color="teal" />,
      url: "/dashbord/allpost",
    },
    {
      id: 4,
      title: "Setting",
      icon: <Settings color="teal" />,
      url: "/dashbord/setting",
    },
  ],
  popUpLink: [
    {
      id: 2,
      title: "Setting",
      url: "/dashbord/setting",
      icon: <Settings color={"teal"} />,
    },
    {
      id: 3,
      title: "Dashboard",
      url: "/dashbord",
      icon: <Dashboard color={"teal"} />,
    },
  ],
  popLinkAc: [
    {
      id: 5,
      title: "Add Post",
      url: "/dashbord/addpost",
      icon: <LayoutGridAdd color={"teal"} />,
    },
    {
      id: 6,
      title: "Log Out",
      url: "/dashbord/logout",
      icon: <Logout color={"teal"} />,
    },
  ],
  navlink: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
    },
  ],
  gameData: [
    {
      id: 1,
      title: "Norway Fjord Adventures",
      dis: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    },
    {
      id: 2,
      title: "Norway Fjord Adventures",
      dis: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    },
    {
      id: 3,
      title: "Norway Fjord Adventures",
      dis: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    },
    {
      id: 4,
      title: "Norway Fjord Adventures",
      dis: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    },
    {
      id: 5,
      title: "Norway Fjord Adventures",
      dis: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    },
  ],
};

export const getAlert = (data) => {
  Swal.fire({
    icon: "error",
    title: data[0],
    text: data[1],
  });
};

export const slugMaker = (data) => {
  const str = data.toLowerCase();
  const mainStr = str.replace(/\s+/g, "-").replace(/-+/g, "-");

  return mainStr;
};
