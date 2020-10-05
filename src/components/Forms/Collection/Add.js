import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addCollection } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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

export default function AddAdmin() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

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

    return (
        <Container>
            <Formik
                initialValues={{
                    collectionName: "",
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.collectionName) {
                        errors.collectionName = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    dispatch(addCollection(values, history));
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
                            <Grid container>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="collectionName"
                                    label="Collection Name"
                                    autoFocus
                                />
                                <ErrorMessage
                                    name="collectionName"
                                    component="div"
                                    className={classes.error}
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
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
