import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Container,
  Grid,
  Button,
  InputLabel,
  Select,
  FormControl,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/actions";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import ReactFilestack from "filestack-react";
const filestackapi= "AugqfuGzTQouENQs5OOe2z";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0.7rem 1rem rgba(111, 115, 184, 0.8) !important",
  },
  field: {
    width: "100%",
  },
  error: {
    color: "red",
    fontStyle: "italic",
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // const loggedAdmin = jwtDecode(localStorage.getItem('token'))
  // console.log(loggedAdmin.role, "logged")

  const CustomField = (props) => {
    return (
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        className={classes.field}
        required
        {...props}
      />
    );
  };

  const filestack = (props) => {
    return (
      <ReactFilestack
        apikey={`${filestackapi}`}
        onSuccess={(result) => {
          this.setState({
            imageUrl: result.filesUploaded[0].url,
          });
        }}
      />
    );
  };

  return (
    <Container>
      <Formik
        initialValues={{
          productName: "",
          categories: "",
          price: "",
          stock: "",
          image: {
            id: '',
            urlImage: ''
          }

        }}
        onSubmit={(values) => {
          dispatch(addProduct(values, history));
        }}
      >
        {() => (
          <Form noValidate autoComplete="off">
            <Grid
              container
              justify="center"
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid container item xs={12} md={6} lg={6}>
                <Field
                  type="productName"
                  as={CustomField}
                  name="productName"
                  label="Product Name"
                  autoFocus
                />
              </Grid>
              <Grid container item xs={12} md={6} lg={6}>
                <Field
                  type="text"
                  as={CustomField}
                  name="categories"
                  label="Categories"
                  autoFocus
                />
              </Grid>
              <Grid container item xs={12} md={6} lg={6}>
                <Field
                  type="text"
                  as={CustomField}
                  name="price"
                  label="Price"
                />
              </Grid>
              <Grid container item xs={12} md={6} lg={6}>
                <Field
                  type="text"
                  as={CustomField}
                  name="stock"
                  label="Stock"
                />
              </Grid>
              <Grid container item xs={12} md={6} lg={6}>
                <Field
                  type="text"
                  as={CustomField}
                  name="image.image"
                  label="image"
                />
              </Grid>
              <Grid container item xs={12} md={6} lg={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add Product
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
