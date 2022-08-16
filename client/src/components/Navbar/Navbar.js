import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { BrowserRouter as Router, Link } from 'react-router-dom';







const Navbar = () => {




    const reDiToCreate = () => {
        console.log("Button Click to go create");

    }


    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Photos
                    </Typography>



                    <Router>
                        <div>
                            <Link to="/posts/create">
                                <Button color="secondary"> Create Post </Button>
                            </Link>
                        </div>
                    </Router>






                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;



