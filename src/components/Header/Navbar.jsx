import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import CallIcon from "@mui/icons-material/Call";
import "./Header.css";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "white",
    color: "#000",
    boxShadow: "none",
    borderRadius:'0.6em',
    padding: '0.2em',
    marginTop:'2rem'
  };
  return (
    <AppBar position="static" style={navbarStyle}>
      <Toolbar>
        {/* Logo (Left) */}
        <div style={{ flexGrow: 1 }}>
          <img
            src={logo}
            alt="logo"
            style={{  height: "1.7375rem" }}
          />
        </div>

        <div style={{ flexGrow: 2 }}>
          <Button className="nav-items">Home</Button>
          <Button className="nav-items">About</Button>
          <Button className="nav-items">Health Checkup</Button>
          <Button className="nav-items">Doctors</Button>
          <Button className="nav-items">Departments</Button>
        </div>

        {/* Button (Right) */}
        <div>
          <Button
            className="nav-items"
            style={{ marginRight: "2rem", fontWeight: "700" }}
          >
            <CallIcon color="inherit" fontSize="small" />
            1005-346-272
          </Button>
          <Button variant="contained" className="nav-button">Appointment</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
