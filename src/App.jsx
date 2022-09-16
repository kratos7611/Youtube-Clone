import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";
import VideoDetail from "./components/VideoDetail/VideoDetail.jsx";
import ChannelDetail from "./components/ChannelDetail/ChannelDetail";
import SearchFeed from "./components/SearchFeed/SearchFeed";
import { Box } from "@mui/material";


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;

