import React from "react";
import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";

import Videos from "../Videos/Videos";
import { fetchFromApi } from "../../utils/FetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

  const { searchTerm } = useParams();

  let [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} ml={5} overflow-y="auto" sx={{ flex: 2, height: "auto" }}>
      <Typography
        variant="h4"
        color="white"
        fontWeight="bold"
        marginBottom="20px"
      >
        Search Results for
        <span style={{ color: "#FC1503" }}> {searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
