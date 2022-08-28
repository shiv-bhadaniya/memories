import React, { useEffect } from "react";
import { CircularProgress, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import Post from "./Post/Post";
import { getAllPost } from "../../../action/post";


const Posts = ({ setCurrentId, view }) => {

    const dispatch = useDispatch();

    
    
    const currnetAllPosts = useSelector((state) => state.postReducer);
    console.log("currnetAllPosts : ", currnetAllPosts);
    var data = useSelector((state) => state.userReducer);
    var currentUserAllData = data?.userData;
    var currentUserSavesdPost = currentUserAllData?.savedPost;
    var currentUserFollowingList = currentUserAllData?.following;

    var currentUserAllDataFromLocalStorage = JSON.parse(localStorage.getItem("profile"));
    var currentUserSavedPostFromLS = currentUserAllDataFromLocalStorage?.result?.savedPost;
    

    var currentUserFollowingListFromLS = currentUserAllDataFromLocalStorage?.result?.following;

    var allPost = []

    console.log(view);
    
    useEffect(() => {
        dispatch(getAllPost());
    }, [currentUserAllData, allPost, currentUserAllDataFromLocalStorage])

    const myStyle = {
        myMargin: {
            marginTop: "1%",
        }
    }


    if (view === 1) {
        // all post
        allPost = currnetAllPosts;
    } else if (view === 2) {
        // following post
        if (currentUserAllData !== null) {
            if (currnetAllPosts.length !== 0) {

                for (let i = 0; i < currnetAllPosts?.length; i++) {
                    for(let j = 0; j < currentUserFollowingList?.length; j++) {
                        if(currnetAllPosts[i].creator === currentUserFollowingList[j]) {
                            allPost.push(currnetAllPosts[i]);
                        }
                    }
                }
            }

        } else {

            if (currnetAllPosts.length !== 0) {
                for (let i = 0; i < currnetAllPosts?.length; i++) {
                    for(let j = 0; j < currentUserFollowingListFromLS?.length; j++) {
                        if(currnetAllPosts[i].creator === currentUserFollowingListFromLS[j]) {
                            allPost.push(currnetAllPosts[i]);
                        }
                    }
                }
            }
        }
    } else {
        // save post
        if (currentUserAllData !== null) {
            if (currnetAllPosts.length !== 0) {

                for (let i = 0; i < currnetAllPosts?.length; i++) {
                    for (let j = 0; j < currentUserSavesdPost?.length; j++) {
                        if (currnetAllPosts[i]._id === currentUserSavesdPost[j]) {
                            allPost.push(currnetAllPosts[i])
                        }
                    }
                }

            }

        } else {

            if (currnetAllPosts.length !== 0) {
                for (let i = 0; i < currnetAllPosts?.length; i++) {
                    console.log("i : ", i);
                    for (let j = 0; j < currentUserSavedPostFromLS?.length; j++) {
                        if (currnetAllPosts[i]._id === currentUserSavedPostFromLS[j]) {
                            allPost.push(currnetAllPosts[i]);
                        }
                    }
                }
            }
        }
    }

    console.log("allPost : ", allPost);


    return (
        allPost.length ? (
            <Grid spacing={3} container alignItems="stretch">
                {allPost.map((post) => (
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