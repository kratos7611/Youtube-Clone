import React from "react";
import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Videos from "../Videos/Videos";
import { fetchFromApi } from "../../utils/FetchFromApi";

const Feed = () => {

  let [selectedCategory, setSelectedCategory] = useState('New')

  let [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  },[selectedCategory])
  

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "150vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "gray" }}
        >
          Copyright 2022 @ Nischal
        </Typography>
      </Box>

      <Box p={2} ml={1} overflow-y="auto" sx={{ flex: 2, height: "auto" }}>
        <Typography
          variant="h4"
          color="white"
          fontWeight="bold"
          marginBottom="20px"
        >
          {selectedCategory}
          <span style={{ color: "#FC1503" }}> Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
