import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Superadmin from "./assets/superadmin.jpg";
import Admin from "./assets/admin.jpg";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import DesktopMacRoundedIcon from "@material-ui/icons/DesktopMacRounded";
import RecordVoiceOverRoundedIcon from "@material-ui/icons/RecordVoiceOverRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import TimelineRoundedIcon from "@material-ui/icons/TimelineRounded";
import PetsRounded from "@material-ui/icons/PetsRounded";
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DraftsRoundedIcon from "@material-ui/icons/DraftsRounded";
import ImportContactsRoundedIcon from "@material-ui/icons/ImportContactsRounded";
import jwtDecode from "jwt-decode";
import Badge from "@material-ui/core/Badge";
import { getAllEvents } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteBorder, FormatListBulleted, ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#e04349",
  },
  link: {
    textDecoration: "none",
    color: "#062031",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    margin: "auto",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "& img, & svg,": {
      width: "12vh",
      height: "12vh",
      padding: theme.spacing(2),
      backgroundColor: "white",
      border: "2px solid #e04349",
    },
  },
  icon: {
    paddingRight: theme.spacing(1),
  },
}));

export default function ListMenuItem() {
  const classes = useStyles();
  const loggedAdmin = jwtDecode(localStorage.getItem("menagerie"));
  const dispatch = useDispatch();
  console.log(loggedAdmin.email);

  // useEffect(() => {
  //     dispatch(getAllEvents());
  // }, [dispatch]);

  return (
    <Box className={classes.text}>
      <ListItem className={classes.profile}>
        <Avatar className={classes.avatar}>
          <img src={Superadmin} alt="" />
        </Avatar>

        {/* { loggedAdmin.role==='admin' && 
                <Avatar className={classes.avatar} >
                    <img src={Admin} alt="" />
                </Avatar>
            } */}
        <Grid>
          {/* <Typography variant="h5">{loggedAdmin.fullname}</Typography> */}
          <Typography variant="h5">{loggedAdmin.email}</Typography>
        </Grid>
      </ListItem>
      <Divider />
      <Link to="/dashboard/dashboard" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <DashboardRoundedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to="/dashboard/admins" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <DesktopMacRoundedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Admin" />
        </ListItem>
      </Link>
      <Link to="/dashboard/product" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCart color="primary" />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
      </Link>
      <Link to="/dashboard/petCategory" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <PetsRounded color="primary" />
          </ListItemIcon>
          <ListItemText primary="Pet Category" />
        </ListItem>
      </Link>
      <Link to="/dashboard/breeds" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <FavoriteBorder color="primary" />
          </ListItemIcon>
          <ListItemText primary="Breeds" />
        </ListItem>
      </Link>
      <Link to="/dashboard/petAdoptionTransaction" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <FormatListBulleted color="primary" />
          </ListItemIcon>
          <ListItemText primary="Pet Adoption Transaction" />
        </ListItem>
      </Link>

      {/* <Link to="/dashboard/events" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <RecordVoiceOverRoundedIcon color="primary" />
                    </ListItemIcon>
                        <Badge className={classes.icon} badgeContent={allEvents.length} color="secondary">
                            <ListItemText primary="Events" />
                        </Badge >
                        <Badge className={classes.icon} badgeContent={10} color="secondary">
                            <ListItemText primary="Events" />
                        </Badge >
                </ListItem>
            </Link> */}
    </Box>
  );
}
