import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CatCollection from './CatCollection';
import DogCollection from './DogCollection';
import { CatOnly, DogOnly } from '..';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0.7rem 1rem rgba(111, 115, 184, 0.8) !important',
  },
  tablehead: {
    backgroundColor: '#3a6986',
      '& th, & a,': {
        color: 'white',
        fontSize: '18px',
    },
  },
}));

export default function Transaction() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static" className={classes.tablehead} >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          {/* <LinkTab label="Adoption Transaction" href="/adoptionTransaction" {...a11yProps(0)} /> */}
          <LinkTab label="Cat Collections" href="/pets/cat-collections" {...a11yProps(0)} />
          <LinkTab label="Dog Collections" href="/pets/dog-collections" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
     
      <TabPanel value={value} index={0}>
        <CatOnly />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DogOnly />
      </TabPanel>
    </Box>
  );
}