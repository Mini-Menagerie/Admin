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
import { getAllAdmin, getAllProducts, deleteProduct, updateProduct, getAllImage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
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


export default function Product() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const admins = useSelector((state) => state.admin);
    const product = useSelector((state) => state.product);
    const urlImage = useSelector((state) => state.image);
    console.log(product)
    // console.log(urlImage)

    const loggedAdmin = jwtDecode(localStorage.getItem('token'))
    // console.log(loggedAdmin, "logged")

    useEffect(() => {
        dispatch(getAllAdmin());
        dispatch(getAllProducts());
        dispatch(updateProduct());
        dispatch(getAllImage());
    }, [dispatch]);

    return (
        <Fragment >
            <Box component={Paper} className={classes.root}>
                <Container >
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid>
                            <Typography className={classes.tablehead} variant="h4">List Products</Typography>
                        </Grid>
                        <Grid>
                            
                            <Link
                                to="/dashboard/product/add"
                                className={classes.link}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<AddIcon />}
                                >
                                    Add Product
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>

                <TableContainer component={Paper} className={classes.table} >
                    <Table aria-label="a dense table" size="small">
                        <TableHead className={classes.text} >
                            <TableRow  > 
                                <TableCell >
                                    <Typography className={classes.text} variant="h6">No</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography className={classes.text} variant="h6">Product Name</Typography>
                                </TableCell>
                                <TableCell align="right" >
                                    <Typography className={classes.tablehead} variant="h6">Price</Typography>
                                </TableCell>
                                <TableCell align="right" >
                                    <Typography className={classes.tablehead} variant="h6">Quantity</Typography>
                                </TableCell>
                                <TableCell align="right" >
                                    <Typography className={classes.tablehead} variant="h6">Image</Typography>
                                </TableCell>
                                <TableCell align="right" >
                                    <Typography className={classes.tablehead} variant="h6">Action</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(product) &&
                            product.map((row, index) => (
                                
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h6">{index+1}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="h6">{row.productName}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="h6">{row.price}</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="h6">{row.stock}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                    <CardMedia
                                            className={classes.media}
                                            image={row.image[0]}
                                            title="urlImage"
                                        />
                                     
                                   
                                     
                                    </TableCell>
                                    {index >= 0 &&
                                    <TableCell align="center">
                                    
                                    <Link
                                            to={`/dashboard/product/edit/${row._id}`}
                                            className={classes.link}
                                        >
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<EditIcon />}
                                            >
                                                Add Image
                                            </Button>
                                        </Link>   
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                            onClick={() =>
                                                
                                                dispatch(deleteProduct(row._id))
                                            }
                                        >
                                            Delete
                                        </Button>
                                    
                                    </TableCell>
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Fragment>
    );
}