import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { getAllPost } from "./action/post";
import Auth from "./components/Auth/Auth";
import Form from "./components/Create Post/Form";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Post/Posts/Posts";




function App() {

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState();
  

  useEffect(() => {
    dispatch(getAllPost());
  }, [currentId, dispatch]);


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts setCurrentId={setCurrentId} />} />
          <Route path="/posts/create" element={<Form currentId={currentId}  setCurrentId={setCurrentId} />} />
          <Route path="/user/auth" element={<Auth />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
