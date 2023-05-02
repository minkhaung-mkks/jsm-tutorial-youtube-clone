import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetails, topMargin}) => {
    console.log(channelDetails)
  return (
    <Box sx={{
        boxShadow:'none',
        margin:'auto',
        borderRadiu:'20px',
        width:{md:'20vw', xs:'100%'},
        height: {md:'20vh', xs:'30vh'},
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:topMargin
    }}> 
        <Link to={`/channel/${channelDetails?.id?.channelId}`}>
          <CardContent sx={{ display:'flex', flexDirection:'column',justifyContent:'center', textAlign:'center', color:'#fff'}}>
            <CardMedia
              image={channelDetails?.snippet?.thumbnails?.high?.url ?? demoProfilePicture}
              alt={channelDetails?.snippet?.channelTitle}
              sx={{
                borderRadius:'50%', height:'180px', width: '180px', marginBottom:'2px', border:'1px solid #3e3e3e', marginTop:'10%'
              }}
            >

            </CardMedia>
            <Typography variant='h6'>
              {channelDetails?.snippet?.title}
              <CheckCircle sx={{ fontSize: '12px', color: "#3e3e3e", marginLeft: '5px'}}> 
                </CheckCircle>
            </Typography>
            {channelDetails?.statistics?.subscriberCount && (
                <Typography sx={{fontSize:'15px', fontWeight:1000, color:'#3e3e3e'}}>
                    {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString('en-US') } Subscribers
                </Typography>
            )}
          </CardContent>
        </Link>
      </Box>
  )
}

export default ChannelCard