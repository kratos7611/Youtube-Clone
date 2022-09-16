import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import {
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../../utils/constants";

const VideoCard = ({video: {id: { videoId },snippet},}) => {
  return (
    <Card sx={{ width: { md:'300px', xs:'100%', sm:'358px' }, borderRadius:'0', boxShadow:'none' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet.title}
          sx={{ width: {xs:'100%' , sm:'358px', md:'300px'}, height: 180 }}
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography 
              variant="subtitle1" 
              color="#fff" 
              fontWeight="bold"
            >
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>


          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography 
              variant="subtitle2" 
              color="gray" 
              fontWeight="bold"
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle 
                sx={{ fontSize:15, color:'gray', ml:'5px' }}
              />
            </Typography>
          </Link>
          
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
