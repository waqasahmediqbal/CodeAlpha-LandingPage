import { Button, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

const TopBar = () => {
  return (
    <div className="Topbar">
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <Button className="Topbar-button" >
              <LocationOnIcon
                color="inherit"
                style={{ marginRight: "0.5rem" }}
              />
              90919 Madie run Apt. 790
            </Button>
          </Grid>
          <Grid item sm={12} md={4}>
            <Button className="Topbar-button">
              <EmailIcon color="inherit" style={{ marginRight: "0.5rem" }} />
              medico@health.care
            </Button>
          </Grid>
          <Grid item sm={12} md={4}>
            <Button
              className="Topbar-button"
              style={{ textDecoration: "underline" }}
            >
              <WhatsAppIcon color="inherit" style={{ marginRight: "0.5rem" }} />
              Connect on Whatsapp
            </Button>
          </Grid>
        </Grid>
    </div>
  );
};
export default TopBar;
