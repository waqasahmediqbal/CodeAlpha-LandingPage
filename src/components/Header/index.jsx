import React from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import { Container, Grid, Button } from "@mui/material";
import pic from "../../assets/header-picture.png";

const Index = () => {
  return (
    <>
      <TopBar />
      <Container maxWidth="lg">
        <Navbar />
        <Grid container spacing={12}>
          <Grid item md={5} lg={6}>
            <img
              src={pic}
              alt="picture"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item md={7} lg={6}>
            <p className="header-para">Welcome to Medico Healthcare</p>
            <h1 className="header-title">
              Your Journey to Better Health Starts Here
            </h1>
            <Button variant="contained" className="nav-button">
              Discover More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Index;
