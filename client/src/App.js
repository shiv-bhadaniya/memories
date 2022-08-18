import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Form from "./components/Create Post/Form";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Post/Posts/Posts";




function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/create" element={<Form />} />
          <Route path="/user/auth" element={<Auth />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
