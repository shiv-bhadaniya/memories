import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import moment from "moment";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deletePost, getAllPost, getOnePostDetails, likePost } from '../../../../action/post';
import { blue } from '@mui/material/colors';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { getUserProfile } from "../../../../action/user.js";

const Post = ({ post, setCurrentId }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));
  var userId = user?.result?._id;

  const [likes, setLikes] = useState(post.likes);
  const hasLikedPost = post?.likes?.find((like) => like === userId);



  const myStyle = {
    cardMedia: {
      height: 0,
      paddingTop: '56%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundBlendMode: 'darken',
    },

    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '100%',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white',
    },
    overlay2: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      color: 'white',
    },
    grid: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
    },
    title: {
      padding: '0 16px',
    },
    cardActions: {
      padding: '0 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  }


  const handleUpdate = () => {
    console.log("Click for update");
    setCurrentId(post._id)
    navigate("/posts/create");
  }

  const handleLikeButton = () => {
    console.log("Like button click. ");
    dispatch(likePost(post._id))

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
    
    dispatch(getAllPost());

  }



  const handleDeletePost = () => {
    dispatch(deletePost(post._id));

  }

  const handleMessageClick = () => {
    dispatch(getOnePostDetails(post._id));
    navigate(`/posts/post/${post._id}`)
    
  }

  const handleNameButton = () => {
    dispatch(getUserProfile(post.creator));
    navigate(`/user/profile/${post.creator}`);
  }


  const Likes = () => {
    if (likes.length > 0) {
      return likes.find(oneLike => oneLike === userId)
        ? (
          <> <ThumbUpIcon fontSize='medium' /> </>
        ) : (
          <> <ThumbUpOffAltIcon fontSize='medium' /> </>
        )
    }

    return <> <ThumbUpOffAltIcon fontSize='medium' /></>
  }






  return (
    <>
      <Card style={myStyle.card} >
        <CardMedia style={myStyle.cardMedia} image={post.selectedFile} title={post.title} />

        <div style={myStyle.overlay}>
          <Typography variant='h6' onClick={handleNameButton} sx={{ cursor: "pointer" }}>{post.name}</Typography>
          <Typography variant='body2' >{moment(post.createdAt).fromNow()}</Typography>
        </div>



        {post.creator === user?.result._id && (<div style={myStyle.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={handleUpdate}> <MoreHorizIcon fontSize="large" /></Button>
        </div>)}

        <div style={myStyle.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => ` #${tag}`)}</Typography>
        </div>

        <Typography style={myStyle.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" >{  post.message.slice(0, 300) }  {post.message.length > 300 && <><Typography  onClick={handleMessageClick} sx={{ color: blue[500], cursor: "pointer" }} > Read More..... </Typography></> }  </Typography>


        </CardContent>

        <CardActions style={myStyle.cardActions}>

          <Button disabled={!user?.result} onClick={handleLikeButton} size="small" color="primary" >
            <Likes />
          </Button>

          <Button size="small" color="primary" disabled={!user?.result}>
            <ThumbDownOffAltIcon fontSize="medium" />
          </Button>

          <Button size="small" color="primary" disabled={!user?.result} >
              <BookmarkAddIcon fontSize="medium" />
          </Button>

          {post.creator === user?.result._id && (<Button size="small" color="primary" onClick={handleDeletePost} >  <DeleteIcon fontSize="medium" /> </Button>)}




        </CardActions>
      </Card>
    </>
  )
}

{/* <Link to={`/posts/post/${post._id}`}> read more...</Link> */}

export default Post;