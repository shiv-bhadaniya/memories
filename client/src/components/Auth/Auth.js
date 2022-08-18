import React, { useState } from "react";
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { red } from '@mui/material/colors';
import Input from "./Input";
import { signin, signup } from "../../action/auth";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [passwordSame, setPasswordSame] = useState(0);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
          dispatch(signup(formData, navigate));
        } else {
            dispatch(signin(formData, navigate));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };




    const switchMode = () => {
        setShowPassword(false);
        setIsSignup((preIsSignup) => !preIsSignup);
    };


    const classes = {
        paper: {
            marginTop: '2%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5%',
            paddingLeft: '1%',
            paddingRight: '1%',

        },
        root: {
            '& .MuiTextField-root': {
                margin: '2%',


            },
        },
        avatar: {

            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '10px',

        },
        form: {
            width: '100%',
            marginTop: '2%',

        },
        submit: {
            marginTop: '2%',
            marginBottom: '2%',

        },

        mainDiv: {
            paddingTop: '2%',
        },

        lockIconStyle: {
            border: '2px solid'
        },

        buttonPadding: {
            paddingTop: '10px',
            paddingBottom: '10px',
        }
    }



    return (
        <Container style={classes.mainDiv} component="main" maxWidth="xs">
            <Paper style={classes.paper} elevation={3}>

                <Avatar sx={{ bgcolor: red[500] }} style={classes.avatar}>
                    <LockIcon />
                </Avatar>

                <Typography style={{ marginBottom: '10px' }} align="center" component="h1" variant="h5">
                    {" "}
                    {isSignup ? "Sign Up" : "Sign In"}{" "}
                </Typography>
                <form style={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        {isSignup && (
                            <>
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    autoFocus
                                    half

                                />
                                <Input
                                    name="lastName"
                                    label="Last Name"
                                    handleChange={handleChange}
                                    half
                                />
                            </>
                        )}
                        <Input
                            name="email"
                            label="Email"
                            handleChange={handleChange}
                            type="email"
                        />
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignup && (
                            <Input
                                name="confirmPassword"
                                label="Confirm Password"
                                handleChange={handleChange}
                                type="password"
                            />
                        )}
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={classes.submit}
                    >
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>


                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup
                                    ? "Already have an account? Sign In"
                                    : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
