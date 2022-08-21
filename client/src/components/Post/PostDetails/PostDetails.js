import React from 'react'
import {  useSelector } from 'react-redux';



const PostDetails = () => {

    
  const post = useSelector((state) => state.postReducer);
  console.log("Post Details page : ", post);
  
  return (
    <div>PostDetails</div>
  )
}

export default PostDetails;