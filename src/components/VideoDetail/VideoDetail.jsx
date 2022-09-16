import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromApi } from "../../utils/FetchFromApi";
import { Typography, Stack, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "../Videos/Videos";

function VideoDetail() {
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setvideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then(
      (data) => setvideoDetail(data.items[0]),

      fetchFromApi(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => setvideos(data.items))
    );
  }, [id]);

  // Use this lien of code if you have any null values coming in through the API
  if (!videoDetail?.snippet) return "Loading...";
  if (!videos) return "Loading...";
  //............................................................................

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`http://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              p={2}
              mt="20px"
            >
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "7px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  variant="body1"
                  sx={{ opacity: "0.8px", color: "#fff" }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: "0.8px", color: "#fff" }}
                >
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
