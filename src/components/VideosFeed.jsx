import React from 'react';
import { Stack,Box } from '@mui/material';

import {VideoCard, ChannelCard} from './exports'

/**
 * A component that displays a list of videos and channels in a stack of boxes, each containing either a VideoCard or a ChannelCard component.
 * 
 * @param {Object[]} videos - An object either representing a video or a channel, containing its ID and snippet informations.
 * @param {String} direction - An string containing the flexDirection of the Stack, 
 * 
 * @default flexDirections - row
 *  
 * @returns {JSX.Element} A Stack with boxes containing either a channelCard or a videoCard. Does not return Playlists
 */

const VideosFeed = ({videos, flexDirections}) => {

    if(!videos?.length) return 'loading...'
  return (
    <Stack direction={flexDirections || 'row'} flexWrap="wrap" justifyContent="flex-start" gap={2} margin='0 auto'>
        {videos.map((video,index)=>{
            
            return video?.id?.videoId ?? video?.id?.channelId ? (
             <Box key={index} sx={{
                width:{ xs:'100%',md:'20vw'}
            }}>
                {video?.id?.videoId && <VideoCard video={video} />}
                {video?.id?.channelId && <ChannelCard channelDetails={video} topMargin='2vh' />}
            </Box>
            ) : null
            })}
    </Stack>
  )
}

export default VideosFeed