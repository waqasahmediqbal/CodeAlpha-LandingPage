import React from "react";
import { makeStyles } from "@mui/styles";
import { Container,Button,Grid,Typography,Link } from "@mui/material";
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../../assets/logo(2).png";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#18A0A9",
    color: "white",
    fontSize: "1.125rem",
    fontWeight: "500",
    paddingTop: "6.25rem",
    paddingBottom: "6.25rem",
    marginTop:'6.25rem'
  },
  link: {
    color: "white !important",
    textDecoration: "none !important",
    fontSize: "1rem !important",
    fontWeight: "500 !important",                                              
    marginBottom:'0.8rem !important',
    "&:hover": {
      textDecoration: "underline !important",
    },
  },
  socialIcons: {
    display: "flex",
    marginTop: theme.spacing(2),
  },
  icon: {
    fontSize: "2rem",
    color: "white",
    margin: theme.spacing(0, 2),
  },
  button: {
    color: '#FFF !important',
    fontSize: '1.25rem !important',
    fontStyle: 'normal !important',
    fontWeight: '700 !important',
    lineHeight: 'normal !important',
    textTransform:'none !important',
    outline:'none !important',
    border:'1px solid #fff !important',
    borderRadius: '0.625rem !important',
    padding:'0.7rem !important',
    width:'17.8rem !important',
    marginBottom:'0.7rem !important',
    "&:hover":{
     backgroundColor:'#333 !important',
    border:'1px solid #333 !important'
    }
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <img src={logo} alt="" style={{marginBottom:'3.12rem'}}/>
            <br/>
<Button variant="outlined" className={classes.button}><ReplyOutlinedIcon style={{ marginRight: "0.5rem" }}/>Take an Appointment</Button>
<br/><Button variant="outlined" className={classes.button}><WhatsAppIcon color="inherit" style={{ marginRight: "0.5rem" }} />Connect on Whatsapp</Button>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography gutterBottom>SERVICES</Typography>
            <Link href="#" className={classes.link}>
              Pathology
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Ambulance
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Radiology
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Pharmacy
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography gutterBottom>HEALTH CHECKUP</Typography>
            <Link href="#" className={classes.link}>
              Women Health
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Cancer Screening
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Cardiac Health
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              MRI Checkup
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography gutterBottom>DEPARTMENTS</Typography>
            <Link href="#" className={classes.link}>
              General
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Dermatology
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Cardiology
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Cancer
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography gutterBottom>QUICK LINKS</Typography>
            <Link href="#" className={classes.link}>
              License
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Changelog
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
