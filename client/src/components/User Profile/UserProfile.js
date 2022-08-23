import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from "@mui/material";
import { getUserProfile } from '../../action/userDetails';
import { useNavigate } from 'react-router-dom';
import { followUser } from "../../action/user";



const UserProfile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  var [isFollow, setIsFollow] = useState(0);

  var searchUserProfile = useSelector((state) => state.userDetailsReducer);
  var searchUserProfileId = searchUserProfile?.userData?._id;





  var posts = useSelector((state) => state.postReducer)


  // var loginUserProfile = JSON.parse(localStorage.getItem("profile"));
  // var loginUserProfileId = loginUserProfile?.result?._id;


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

      if(loginUserProfileFromLocalStorage === null) {
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
      <Button onClick={handleFollowButton} size="small" color="primary" >
        <Option />
      </Button>



    </div>
  )
}

export default UserProfile