import React from 'react';
import { Link } from 'react-router-dom';
import {Typography,Card,CardContent,CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constants'

const VideoCard = ({video: {id: {videoId}, snippet} }) => {
  return (
    <Card 
        sx={{
            width:{md:'20vw', xs:'100%'},
            borderRadius:'10px',
            backgroundColor:'transparent'
        }}
        title={snippet?.title ?? demoVideoTitle}
    >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{
                    width:{md:'20vw', xs:'100%'},
                    height: {md:'20vh', xs:'30vh'}
                }}
            >
            </CardMedia>
        </Link>
        <CardContent sx={{ backgroundColor: '#0e0e0e', height: '10vh' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                    {snippet?.title?.slice(0,60) ?? demoVideoTitle.slice(0,60)}
                </Typography>
            </Link> 
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="#5e5e5e">
                    {snippet?.channelTitle?.slice(0,60) ?? demoChannelTitle.slice(0,60)}
                    <CheckCircle sx={{ fontSize: '12px', color: "#3e3e3e", marginLeft: '5px'}}> 

                    </CheckCircle>
                </Typography>
            </Link> 
        </CardContent>
    </Card>
  )
}

export default VideoCard