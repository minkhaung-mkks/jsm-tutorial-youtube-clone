import React from 'react';
import { Stack,Box } from '@mui/material';

import {VideoCard, ChannelCard} from './exports'

const VideosFeed = ({videos}) => {
    console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={2}>
        {videos.map((video,index)=>(
            <Box key={index}>
                {video.id.videoId && <VideoCard video={video} />}
                {video.id.channelId && <ChannelCard channelDetails={video} />}
            </Box>
        ))}
    </Stack>
  )
}

export default VideosFeed