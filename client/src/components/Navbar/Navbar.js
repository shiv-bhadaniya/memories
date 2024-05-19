import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Button,
    Tabs,
    Tab,
    Box,
} from "@mui/material";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import classes from "./NavbarStyle";






const Navbar = ({ setView }) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();


    var [user, setUser] = React.useState(JSON.parse(localStorage.getItem("profile")));
    var [tabValue, setTabValue] = React.useState("1");


    React.useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogOut();
            }
        }
        setUser(JSON.parse(localStorage.getItem("profile")))
    }, [location])

    const handleLogOut = () => {
        dispatch({ type: "LOGOUT" });
        setUser(null);
    }

    var handleAllPost = () => {
        setTabValue("1");

        setView(1)
    }

    var handleFollowingPost = () => {
        setTabValue("2");
        setView(2)
    }

    var handleSavedPost = () => {
        setTabValue("3");
        setView(3);
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <AppBar style={classes.appbar} position="static" elevation={6}>
                <Typography variant="h6" component="div">
                    <Link style={{ textDecoration: "none" }} to="/">
                        <Typography style={classes.heading}>Memories</Typography>
                    </Link>
                </Typography>
                <Button
                    style={{ marginLeft: "auto" }}
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        navigate("/posts/create");
                    }}
                    disabled={!user?.result}
                >
                    Create Memories
                </Button>

                <Box
                    sx={{
                        maxWidth: { xs: 320, sm: 480 },
                        bgcolor: "background.paper",
                        marginLeft: "150px",
                    }}
                >
                    <Tabs
                        value={tabValue}
                        variant="scrollable"
                        onChange={handleTabChange}
                        scrollButtons={false}
                        aria-label="scrollable prevent tabs example"
                    >
                        <Tab onClick={handleAllPost} value="1" label="All" />
                        <Tab
                            onClick={handleFollowingPost}
                            value="2"
                            label="Following"
                            disabled={!user?.result}
                        />
                        <Tab onClick={handleSavedPost} disabled={!user?.result} value="3" label="Saved" />
                    </Tabs>
                </Box>
                <Toolbar style={classes.toolbar}>
                    {user?.result ? (
                        <div style={classes.profile}>

                            <Avatar
                                style={classes.avatar}
                                alt={user?.result.name}
                                src={user?.result.imageUrl}
                            >
                                {user?.result.name.charAt(0)}
                            </Avatar>
                            <Typography style={classes.userName} variant="h6">
                                {user?.result.name.split(" ")[0]}
                            </Typography>

                            <Button
                                style={classes.logout}
                                variant="outlined"
                                onClick={handleLogOut}
                            >
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <Button
                            component={Link}
                            to="/user/auth"
                            variant="outlined"
                            color="primary"
                        >
                            Sign In
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;



