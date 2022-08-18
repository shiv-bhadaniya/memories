import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";






const Navbar = () => {

    const dispatch = useDispatch();
    const location = useLocation();


    var [user, setUser] = React.useState(JSON.parse(localStorage.getItem("profile")));
    

    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")))
 

    }, [location])
    
    const handleLogOut = () => {
        dispatch({ type: "LOGOUT" });
        setUser(null);
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Photos
                    </Typography>




                    <div>
                        <Link to="/posts/create">
                            <Button color="secondary"> Create Post </Button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/user/auth">
                            <Button color="secondary"> Log in </Button>
                        </Link>
                    </div>

                    <Button color="secondary" onClick={handleLogOut}> Log out </Button>

                    <div> { user && (user.result.name) } </div>





                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;



