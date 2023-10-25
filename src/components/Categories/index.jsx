import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import pic1 from "../../assets/category-1.png";
import pic2 from "../../assets/category-2.png";
import pic3 from "../../assets/category-3.png";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#000",
    fontSize: "2.875rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    paddingTop: "6.25rem",
  },
  para: {
    color: "#302E2E",
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    width: "55.1875rem",
    marginBottom:'5.75rem'
  },
}));
function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <h1 className={classes.title}>Dedicated to provide best treatment.</h1>
      <p className={classes.para}>
        A wonderful serenity has taken possession of my entire soul, like these
        sweet mornings of spring which I enjoy with my whole heart. I am alone,
        and feel the charm of existence in this spot, which was created for the
        bliss of souls like mine.
      </p>
      <Grid container spacing={12}>
        <Grid item xs={12} md={4}>
          <img src={pic1} alt="" />
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={pic2} alt="" />
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={pic3} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
