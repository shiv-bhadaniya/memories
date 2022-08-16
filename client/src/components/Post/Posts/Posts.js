import React, { useEffect, useState } from "react";
import { CircularProgress, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPost } from "../../../action/post";
import store from "../../../store";
import Post from "./Post/Post";


const Posts = () => {

    const dispatch = useDispatch();


    const currnetAllPosts = useSelector((state) => state.postReducer);
    
    
    useEffect(() => {
        dispatch(getAllPost());
    }, [])
    

    const myStyle = {
        myMargin : {
            marginTop: "1%",
        }
    }




    return (     
            currnetAllPosts.length ? (
            <Grid  spacing={3} container alignItems="stretch">
                {currnetAllPosts.map((post) => (
                    // md = big, xs = small, sm = medium
                    <Grid style={myStyle.myMargin} key={post._id} item xs={12} sm={6} md={3}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
            ) : <CircularProgress />
    )
}

export default Posts;