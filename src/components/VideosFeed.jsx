import React from 'react';
import { Stack,Box } from '@mui/material';

import {VideoCard, ChannelCard} from './exports'

const VideosFeed = ({videos}) => {
    console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={2} margin='0 auto'>
        {videos.map((video,index)=>{
            return video?.id?.videoId ?? video?.id?.channelId ? (
             <Box key={index}>
                {video?.id?.videoId && <VideoCard video={video} />}
                {video?.id?.channelId && <ChannelCard channelDetails={video} topMargin='2vh' />}
            </Box>
            ) : null
            
            })}
    </Stack>
  )
}

export default VideosFeed