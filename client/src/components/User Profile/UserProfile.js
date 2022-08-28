import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, Grid, Box, Avatar, CircularProgress, Divider } from "@mui/material";
import { getUserProfile } from '../../action/userDetails';
import { useNavigate } from 'react-router-dom';
import { followUser } from "../../action/user";
import Post from "../Post/Posts/Post/Post";



const UserProfile = ({setCurrentId}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  var [isFollow, setIsFollow] = useState(0);


  const classes = {
    avatar: {
      height: "200px",
      width: "200px",
      fontSize: " 3.5rem",
    },
    typographyFont: {
      fontFamily: "Helvetica"
    },
    myMargin: {
      marginTop: "1%",
    }
  };


  var searchUserProfile = useSelector((state) => state.userDetailsReducer);
  var searchUserProfileId = searchUserProfile?.userData?._id;





  var posts = useSelector((state) => state.postReducer)


  var loginUserProfile = JSON.parse(localStorage.getItem("profile"));
  var loginUserProfileId = loginUserProfile?.result?._id;


  var loginUserUpdatedProfile = useSelector((state) => state.userReducer);


  var userPosts = [];

  posts?.map((post) => {
    if (post?.creator === searchUserProfile?.userData?._id) {
      userPosts.push(post);
    }
  })



  var loginUserUpdatedFollowing = loginUserUpdatedProfile?.userData?.following;
  console.log("loginUserUpdatedFollowing : ", loginUserUpdatedFollowing);




  var Option = () => {
    if (loginUserUpdatedFollowing === undefined) {
      var loginUserProfileFromLocalStorage = JSON.parse(localStorage.getItem("profile"));

      if (loginUserProfileFromLocalStorage === null) {
        return <Typography> Login to follow </Typography>
      }

      var loginUserProfileFollowingFromLocalStorage = loginUserProfileFromLocalStorage.result.following;
      if ((loginUserProfileFollowingFromLocalStorage.length !== 0)) {
        return loginUserProfileFollowingFromLocalStorage.find(oneId => oneId === searchUserProfileId) ? <Typography> Un Follow </Typography> : <Typography>  Follow </Typography>
      } else {
        return <Typography> Follow </Typography>
      }
    } else {
      if (loginUserUpdatedFollowing.length !== 0) {
        return loginUserUpdatedFollowing.find(oneId => oneId === searchUserProfileId) ? <Typography> Un Follow </Typography> : <Typography> Follow </Typography>
      } else {
        return <Typography> Follow </Typography>
      }

    }

  }





  const handleFollowButton = () => {

    dispatch(followUser(searchUserProfileId));
    dispatch(getUserProfile(searchUserProfileId));
  }
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        {searchUserProfile?.userData && (
          <Grid
            style={{ marginTop: "50px" }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid style={{ marginLeft: "250px" }} item xs={2} sm={4} md={4}>
              <Avatar
                style={classes.avatar}
                alt={searchUserProfile?.userData?.name}
                src={searchUserProfile?.userData?.imageUrl}
              >
                {searchUserProfile?.userData?.name.charAt(0)}
              </Avatar>
            </Grid>
            <Grid
              style={{ marginLeft: "-150px", marginTop: "20px" }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Typography style={classes.typography} variant="h3">
                Name: {searchUserProfile?.userData?.name}
              </Typography>
              <Typography style={classes.typography} variant="h5">
                Email: {searchUserProfile?.userData?.email}
              </Typography>
              <Typography style={classes.typography} variant="h5">
                Following: {searchUserProfile?.userData?.following.length}
              </Typography>
              <Button
                onClick={handleFollowButton}
                size="small"
                color="primary"
              >
                {loginUserProfileId !== searchUserProfileId && <Option />}
              </Button>
            </Grid>
          </Grid>
        )}
        <Divider style={{ margin: '20px 0' }} />
        {userPosts.length ? (
          <Grid spacing={3} container alignItems="stretch">
            {userPosts.map((post) => (
              <Grid style={classes.myMargin} key={post._id} item xs={12} sm={6} md={3}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        ) : <CircularProgress />}
      </Box>



    </div>
  )
}

export default UserProfile