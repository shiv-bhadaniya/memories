import React from 'react'
import { useSelector } from 'react-redux';
import { Box, Grid } from "@mui/material";



const UserProfile = () => {

  const userProfile = useSelector((state) => state.userReducer);
  const posts = useSelector((state) => state.postReducer)

  var userPosts = [];

  posts?.map((post) => {
    if (post?.creator === userProfile?.userData?._id) {
      userPosts.push(post);
    }
  })

  return (
    <div>
      UserProfile
    </div>
  )
}

export default UserProfile