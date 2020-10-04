import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Container,
    Grid,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
    addPetCollection,
    getAllCollection,
    getPetByID,
} from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
    },
    error: {
        color: "red",
        fontStyle: "italic",
    },
    formControl: {
        width: "100%",
    },
}));

export default function FormAddPetCollection() {
    const classes = useStyles();

    const SelectInput = ({ field, form, ...props }) => {
        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                    Collection Name
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Collection Name"
                    {...field}
                    {...props}
                />
            </FormControl>
        );
    };

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const collection = useSelector((state) => state.collection);
    const pet = useSelector((state) => state.pet);
    const idCollection =
        pet.idCollections !== undefined && pet.idCollections !== null
            ? pet.idCollections._id
            : "";

    useEffect(() => {
        dispatch(getAllCollection());
        dispatch(getPetByID(id));
    }, [dispatch, id]);

    return (
        <Container>
            <Formik
                initialValues={{
                    collectionName: idCollection || "",
                }}
                enableReinitialize={true}
                onSubmit={(values) => {
                    dispatch(addPetCollection(id, values, history));
                }}
            >
                {() => (
                    <Form className={classes.form}>
                        <Grid
                            container
                            justify="center"
                            direction="column"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid container item xs={12}>
                                <Field
                                    type="text"
                                    as={SelectInput}
                                    name="collectionName"
                                    label="Collection Name"
                                    required
                                    autoFocus
                                >
                                    {collection.length > 0 &&
                                        collection.map((item) => {
                                            return (
                                                <MenuItem
                                                    value={item._id}
                                                    key={item._id}
                                                >
                                                    <em>
                                                        {item.collectionName}
                                                    </em>
                                                </MenuItem>
                                            );
                                        })}
                                </Field>
                            </Grid>

                            <Grid container item xs={12} md={6} lg={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Add Pet to Collection
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
