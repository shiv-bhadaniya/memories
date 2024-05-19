import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { getAllPost } from "./action/post";
import Auth from "./components/Auth/Auth";
import Form from "./components/Create Post/Form";
import Navbar from "./components/Navbar/Navbar";
import PostDetails from "./components/Post/PostDetails/PostDetails";
import Posts from "./components/Post/Posts/Posts";
import UserProfile from "./components/User Profile/UserProfile";




function App() {

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState();
  const [view, setView] = useState(1)




  useEffect(() => {
    dispatch(getAllPost());
  }, [currentId, dispatch]);


  return (
    <>
      <BrowserRouter>
        <Navbar setView={setView} />
        <Routes>
          <Route path="/" element={<Posts view={view} setCurrentId={setCurrentId} />} />
          <Route path="/posts/create" element={<Form currentId={currentId}  setCurrentId={setCurrentId} />} />
          <Route path="/user/auth" element={<Auth />} />
          <Route path="/posts/post/:id" element={ <PostDetails />} />
          <Route path="/user/profile/:id" element={ <UserProfile setCurrentId={setCurrentId}/> } />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
