import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import pic1 from "../../assets/service-1.png";
import pic2 from "../../assets/service-2.png";
import pic3 from "../../assets/service-3.png";
import pic4 from "../../assets/service-4.png";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#000",
    fontSize: "2.875rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    width: "33.625rem",
    marginTop: "0",
  },
  para: {
    color: "#09A4AD",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    paddingTop: "6.25rem",
    marginBottom: "0",
  },
  subtitle: {
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginTop: 0,
  },
  subpara: {
    color: "#091E29",
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    width: "18.75rem",
  },
  paper: {
    borderRadius: "0.625rem",
    padding: "2.5rem",
  },
}));
function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <p className={classes.para}>SERVICES & TREATMENTS</p>
      <h1 className={classes.title}>
        More than 40 specialty and health care services
      </h1>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} className={classes.paper}>
            <Grid container>
              <Grid xs={2}>
                <img src={pic1} alt="" />
              </Grid>
              <Grid xs={9}>
                <h3 className={classes.subtitle}>Mental Health Service</h3>
                <p className={classes.subpara}>
                  The service provides immediate medical care to patients with
                  acute illnesses or injuries that require immediate attention
                </p>
              </Grid>
              <Grid xs={1}>
                {/* <ArrowForwardOutlinedIcon fontSize="large" style={{margin}}/> */}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <Paper elevation={0} className={classes.paper}>
            <Grid container>
              <Grid xs={2}>
                <img src={pic2} alt="" />
              </Grid>
              <Grid xs={10}>
                <h3 className={classes.subtitle}>Eye Diseasses Service</h3>
                <p className={classes.subpara}>
                  The service provides immediate medical care to patients with
                  acute illnesses or injuries that require immediate attention
                </p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <Paper elevation={0} className={classes.paper}>
            <Grid container>
              <Grid xs={2}>
                <img src={pic3} alt="" />
              </Grid>
              <Grid xs={10}>
                <h3 className={classes.subtitle}>Vaccination Service</h3>
                <p className={classes.subpara}>
                The service provides immediate 
medical care to patients with acute illnesses or injuries that require immediate attention
                </p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <Paper elevation={0} className={classes.paper}>
            <Grid container>
              <Grid xs={2}>
                <img src={pic4} alt="" />
              </Grid>
              <Grid xs={10}>
                <h3 className={classes.subtitle}>Cardiology Service</h3>
                <p className={classes.subpara}>
                  The service provides immediate medical care to patients with
                  acute illnesses or injuries that require immediate attention
                </p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
