import React from 'react';
import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { padding } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import FileBase from "react-file-base64";




import { createNewPost, getAllPost } from '../../action/post';

const Form = () => {

    const [postData, setPostData] = React.useState({
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myStyle = {

        mainDivmiddle: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30%",
            width: "30%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginButtom: "auto",
            // border: " 1px solid red",
            paddingTop: "5%",
        },

        margindStyle: {
            marginTop: "10px",
            paddingLeft: "2px",
            paddingRight: "2px",
        },


    }


    const formSubmitHandle = (e) => {
        e.preventDefault();
        console.log("Form submited.");
        console.log(postData);
        dispatch(createNewPost(postData));
        dispatch(getAllPost());
        navigate("/");
    }


    return (
        <>

            <div style={myStyle.mainDivmiddle}>
                <Paper sx={{ maxWidth: "100vw", maxHeight: "100vh" }}>
                    <form onSubmit={formSubmitHandle}>
                        <Typography align="center" variant="h4">Creating Memories</Typography>
                        
                        <TextField name="title" variant="outlined" label="Title" fullWidth margin="normal" required value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} margin="normal" required value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth margin="normal" required value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})} />
                        
                        <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

                        <Button type="submit" variant="contained" style={myStyle.margindStyle} fullWidth margin="normal"> Submit </Button>
                        <Button variant="contained" style={myStyle.margindStyle} fullWidth margin="normal"> Clear </Button>
                    </form>

                </Paper>
            </div>



        </>
    )
}

export default Form





// elevation={12}
// style={{
//     padding: 8,
//     backgroundColor: "white",
//     border: "1px solid black"
// }}