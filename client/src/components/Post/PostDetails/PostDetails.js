import React, { useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import moment from 'moment';
import classes from './styles';
import { CircularProgress } from '@mui/material';



const PostDetails = () => {

    
  const post = useSelector((state) => state.getOnePostDetailsReducer);





  console.log("Post Details page : ", post);

  return (
        post.length !== 0 ? ( 
            <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div style={classes.card}>
                <div style={classes.section}>
                <Typography variant="h3" component="h2">{post.title}</Typography>
                            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post?.tags?.map((tag) => `#${tag} `)}</Typography>
                            <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                            <Typography variant="h6">Created by: {post.name}</Typography>
                            <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
        
                </div>
                <div style={classes.imageSection}>
                    <img style={classes.media} src={post.selectedFile} alt={post.title} />
                </div>
            </div>  
            </Paper>
        ) : ( <CircularProgress /> )
    )
}

export default PostDetails;