import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

import moment from "moment";

const Post = ({post}) => {


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


   console.log(post);


    return (
        <>
            <Card style={myStyle.card} >
                <CardMedia style={myStyle.cardMedia} image={post.selectedFile} title={post.title}/>

                <div style={myStyle.overlay}>
                    <Typography variant='h6' >{post.name}</Typography>
                    <Typography variant='body2' >{moment(post.createdAt).fromNow()}</Typography>
                </div>

                <div style={myStyle.overlay2}>
                    <Button style={{ color: 'white' }} size="small"> <MoreHorizIcon fontSize="large" /></Button>
                </div>

                <div style={myStyle.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => ` #${tag}`)}</Typography>
                </div>

                <Typography style={myStyle.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>


                </CardContent>

                <CardActions style={myStyle.cardActions}>

                    <Button size="small" color="primary" >
                        <ThumbUpOffAltIcon fontSize="small" />&nbsp;Like
                    </Button>
                    <Button size="small" color="primary" >
                        <ThumbDownOffAltIcon fontSize="small" />&nbsp;Dislike
                    </Button>


                    <Button size="small" color="primary" >  <DeleteIcon fontSize="default" />  <span style={{ marginTop: "3px" }}>&nbsp; Delete</span> </Button>


                </CardActions>
            </Card>
        </>
    )
}

export default Post