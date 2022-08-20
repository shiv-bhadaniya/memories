import React from 'react';
import { Paper, TextField, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FileBase from "react-file-base64";




import { createNewPost, getAllPost, updatePost } from '../../action/post';

const Form = ({currentId, setCurrentId}) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    //------------------------------------------------------   style   ---------------------------------------------------- 

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
            paddingTop: "5%",
        },

        margindStyle: {
            marginTop: "10px",
            paddingLeft: "2px",
            paddingRight: "2px",
        },


    }

    


    // -----------------------------------------------------  hook   ----------------------------------------------------- 


    const [postData, setPostData] = React.useState({ title: "", message: "", tags: "", selectedFile: "" });
    
    // fetch user information 
    var [user, setUser] = React.useState(JSON.parse(localStorage.getItem("profile")));
    
    // fiding which post update 
    var checkPost = useSelector((state) => (currentId ? state.postReducer.find((message) => message._id === currentId) : null));

    




    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")))

        if(!user) {
            navigate("/user/auth");
        }

        if(checkPost) {
            setPostData(checkPost);
        }

    }, [])







    //------------------------------------------------   handle event  ----------------------------------------------------- 

    const handleClear = () => {
        setPostData({ title: "", message: "", tags: "", selectedFile: "" })
    }

    const formSubmitHandle = (e) => {
        e.preventDefault();
        
        if(checkPost) {
            console.log("Call update post");
            dispatch(updatePost(currentId, postData));
        } else {
            console.log("Call new post ");
            dispatch(createNewPost(postData));
        }
        
        dispatch(getAllPost());
        navigate("/");

    }


    return (
        <>

            <div style={myStyle.mainDivmiddle}>
                <Paper sx={{ maxWidth: "100vw", maxHeight: "100vh" }}>
                    <form onSubmit={formSubmitHandle}>
                        <Typography align="center" variant="h4"> {currentId ? "Updating Memories" : "Creating Mamories" } </Typography>
                        
                        <TextField name="title" variant="outlined" label="Title" fullWidth margin="normal" required value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} margin="normal" required value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth margin="normal" required value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})} />
                        
                        <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

                        <Button type="submit" variant="contained" style={myStyle.margindStyle} fullWidth margin="normal"> Submit </Button>
                        <Button variant="contained" style={myStyle.margindStyle} fullWidth margin="normal" onClick={handleClear}> Clear </Button>
                    </form>

                </Paper>
            </div>



        </>
    )
}

export default Form;