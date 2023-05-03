import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

/** 
 * 
 * A reusable component that displays a card containing a channel's profile picture, name, and subscriber count (if available).
 * 
 * @param {object} channelDetails - An object containing information about the channel, including its ID, snippet, and statistics (if available).
 * @param {object} channelDetails.statistics - An object containing statistics about the channel, including its subscriber count (if available).
 * @param {string} channelDetails.statistics.subscriberCount - The number of subscribers of the channel.
 * @param {string} topMargin - The value for the marginTop CSS property of the card.
 * 
 * @returns {JSX.Element} A card component displaying the channel's profile picture, name, and subscriber count (if available).
 *
*/
const ChannelCard = ({channelDetails, topMargin}) => {
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
          <CardContent sx={{ padding:'0', display:'flex', flexDirection:'column',justifyContent:'center', textAlign:'center', color:'#fff'}}>
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
            {/* only diplay sub count if the prop includes the stats */}
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