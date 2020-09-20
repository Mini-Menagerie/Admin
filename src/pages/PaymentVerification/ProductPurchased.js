import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import { CardMedia } from '@material-ui/core';
import { Link } from "react-router-dom";
import { getAllAdmin, getAllProductPurchased, acceptProductPurchased, declineProductPurchased } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import { Send, SentimentDissatisfied } from "@material-ui/icons";
import jwtDecode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
      margin: 'auto',
      boxShadow: '0 0.7rem 1rem rgba(111, 115, 184, 0.8) !important',
      backgroundColor: '#3a6986',
  },
  table: {
      padding: theme.spacing(3),
  },
  tablehead: {
      marginRight: theme.spacing(5),
      color: 'white',
      marginLeft: theme.spacing(5),
  },
  button: {
      margin: theme.spacing(1),
      backgroundColor: '#d16473'
  },
  link: {
      textDecoration: "none",
  },
  text: {
      color: 'white',
      backgroundColor: '#5c84a6',
  },
  media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
}));


export default function ProductPurchased() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const productPurchased = useSelector((state) => state.productPurchased);
    console.log(productPurchased);

    useEffect(() => {
        dispatch(getAllProductPurchased());
    }, [dispatch]);

    return (
        <Fragment >
            <Box component={Paper} className={classes.root}>
                <TableContainer aria-label='a dense table' size='small'>
                   <TableHead className={classes.text}>
                      <TableRow>
                         <TableCell>
                           <Typography className={classes.text} variant='h6'>No</Typography>
                         </TableCell>
                         <TableCell align='left'>
                           <Typography className={classes.text} variant='h6'>Id Transaction</Typography>
                         </TableCell>
                         <TableCell align='left'>
                           <Typography className={classes.text} variant='h6'>Full Name</Typography>
                         </TableCell>
                         <TableCell align='left'>
                           <Typography className={classes.text} variant='h6'>Total Price</Typography>
                         </TableCell>
                         <TableCell align='left'>
                           <Typography className={classes.text} variant='h6'>Transaction Date</Typography>
                         </TableCell>
                         <TableCell align='left'>
                           <Typography className={classes.text} variant='h6'>Payment Slip</Typography>
                         </TableCell>
                         <TableCell align='left'>
                           <Typography className={classes.text} variant='h6'>Status</Typography>
                         </TableCell>
                         <TableCell align='left'>
                           <Typography className={classes.text} variant='h6'>Action Button</Typography>
                         </TableCell>                         
                      </TableRow>
                   </TableHead>
                   <TableBody>
                            {Array.isArray(productPurchased) &&
                            productPurchased.map((row, index) => (
                                
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h6">{index+1}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="h6">{row.idTransaction}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="h6">{row.fullName}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="h6">{row.totalPrice}</Typography>
                                    </TableCell>
                                    {/* <TableCell align="center">
                                        <Typography variant="h6">{row.transactionDate}</Typography>
                                    </TableCell> */}
                                    {/* <TableCell align="center">
                                        <Typography variant="h6">{row.paymentSlip}</Typography>
                                    </TableCell> */}
                                    <TableCell align="center">
                                        <Typography variant="h6">{row.status}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                    {index >= 0 &&
                                    <TableCell align="center">  


                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<Send />}
                                            onClick={() =>
                                                dispatch(acceptProductPurchased("Accepted", row._id))
                                            }
                                        >
                                            Accept
                                        </Button>

                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<SentimentDissatisfied />}
                                            onClick={() =>
                                                dispatch(declineProductPurchased("Decline", row._id))
                                            }
                                        >
                                            Decline
                                        </Button>
                                    
                                    </TableCell>
                                    }
                                     
                                    </TableCell>
                                    
                                </TableRow>
                            ))}
                        </TableBody>

                </TableContainer>
            </Box>
        </Fragment>
          
    
    );
}