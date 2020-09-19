import React, { Fragment, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import {getAllAdmin, getAllCategoryPet, getAllProducts, getAllBreed } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CountUp from 'react-countup';
import { Box } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0',
    },
    
    count: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(4),
        flexWrap: 'wrap',
    },
    
    actspeaker: {
        backgroundColor: '#66de64',
        MozBorderRadius: '10px',
        WebkitBorderRadius: '10px',
        borderRadius: '10px',
        margin: 'auto',
        color: 'white',
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
     },
   
     ogevent: {
        backgroundColor: '#8b64de',
        MozBorderRadius: '10px',
        WebkitBorderRadius: '10px',
        borderRadius: '10px',
        margin: 'auto',
        color: 'white',
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
     },
     cmpldevent: {
        backgroundColor: '#66de64',
        MozBorderRadius: '10px',
        WebkitBorderRadius: '10px',
        borderRadius: '10px',
        margin: 'auto',
        color: 'white',
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
     },
    paper: {
        textAlign: 'center',
        padding: theme.spacing(5),
        margin: theme.spacing(4),
        backgroundColor: 'rgba(191, 255, 254, 0.2);',
        boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important',
        MozBorderRadius: '10px',
        WebkitBorderRadius: '10px',
        borderRadius: '10px'
    },
   
}));


export default function Dashboard() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const allAdmin = useSelector((state) => state.admin);
    const petCategory = useSelector((state) => state.petCategory);
    const breed = useSelector((state) => state.breed);
    const product = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getAllAdmin());
        dispatch(getAllCategoryPet());
        dispatch(getAllProducts())
        dispatch(getAllBreed())
    }, [dispatch]);

    return (
        <Fragment>
            <Box  className={classes.root}>
                    <Grid>
                        <Typography variant='h3'>
                            Dashboard
                        </Typography>
                    </Grid >
                    <Grid className={classes.count} >
                      
                        <Grid elevation={3} className={classes.paper} item xs={false} sm={12} md={5} lg={3}  >
                            <Typography variant="h5">
                                Total Admin
                            </Typography>
                            <Grid className={classes.actspeaker} >
                                <Typography variant="h4">
                                    <CountUp
                                        start={0}
                                        end={allAdmin.length}
                                        duration={4}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=" "
                                    />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid elevation={3} className={classes.paper} item xs={false} sm={12} md={5} lg={3}  >
                            <Typography variant="h5">
                                 Breed
                            </Typography>
                            <Grid className={classes.actspeaker} >
                                <Typography variant="h4">
                                    <CountUp
                                        start={0}
                                        end={breed.length}
                                        duration={4}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=" "
                                    />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid elevation={3} className={classes.paper} item xs={false} sm={12} md={5} lg={3}  >
                            <Typography variant="h5">
                                Pet Category
                            </Typography>
                            <Grid className={classes.actspeaker} >
                                <Typography variant="h4">
                                    <CountUp
                                        start={0}
                                        end={petCategory.length}
                                        duration={4}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=" "
                                    />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid elevation={3} className={classes.paper} item xs={false} sm={12} md={5} lg={3}  >
                            <Typography variant="h5">
                                Products
                            </Typography>
                            <Grid className={classes.actspeaker} >
                                <Typography variant="h4">
                                    <CountUp
                                        start={0}
                                        end={product.length}
                                        duration={4}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=" "
                                    />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
            </Box>
        </Fragment>
    );
}