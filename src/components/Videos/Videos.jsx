import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";

function Videos({ videos, direction }) {
  return (
    <Stack direction={direction || 'row'} justifyContent="start" flexWrap="wrap" gap={2} pt={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channeldetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
