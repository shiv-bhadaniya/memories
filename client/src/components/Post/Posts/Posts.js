import React, { useEffect } from "react";
import { CircularProgress, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import Post from "./Post/Post";
import { getAllPost } from "../../../action/post";


const Posts = ({setCurrentId}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPost());
    }, [currentUserAllData])


    const currnetAllPosts = useSelector((state) => state.postReducer);
    var currentUserAllData = useSelector((state) => state.userReducer);

    
    

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
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
            ) : <CircularProgress />
    )
}

export default Posts;