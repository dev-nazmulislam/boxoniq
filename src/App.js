import React from "react";
import "./App.css";
import Header from "./Pages/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Refer from "./Pages/Refer/Refer";
import Community from "./Pages/Community/Community";
import Blogs from "./Pages/Blogs/Blogs";
import Stories from "./Pages/Stories/Stories";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import ShowBlog from "./Pages/Blogs/ShowBlog";

function App() {
  return (
    <div style={{ backgroundColor: "#F3F3F3" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/showblog" element={<ShowBlog />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/community" element={<Community />} />
        <Route path="/refer" element={<Refer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
