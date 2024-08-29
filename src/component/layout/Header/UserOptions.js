import React, { useState } from "react";
import "./Header.css";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import { useNavigate } from "react-router-dom";

const UserOptions = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const options = [
    {
      icon: <DashboardCustomizeOutlinedIcon />,
      name: "Profile",
      func: account,
    },
    { icon: <ListAltOutlinedIcon />, name: "Orders", func: orders },
    { icon: <ExitToAppOutlinedIcon />, name: "Log Out", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardCustomizeOutlinedIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/dashboard");
  }
  function orders() {
    navigate("/orders");
  }
  function account() {
    navigate("/account");
  }
  function logoutUser() {
    // dispatch(logout());
    alert.success("Logged out successfully");
  }
  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onOpen={() => setOpen(false)}
        onClose={() => setOpen(true)}
        open={open}
        direction="down"
        icon={
          <img
            className="speedDialIcon"
            src={
              user.avatar.url ? user.avatar.url : "../../../images/Profile.png"
            }
            alt="Profile"
          />
        }
      >
        <SpeedDialAction icon={AccountCircleOutlinedIcon} tooltipTitle="Menu" />
      </SpeedDial>
    </>
  );
};

export default UserOptions;
