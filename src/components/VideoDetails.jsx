import React from 'react';
import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography,Box,Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { VideosFeed } from './exports'
import { fetchFromAPI } from '../utils/FetchFromAPI';

const VideoDetails = () => {
  const {id} = useParams();
  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=>setVideoDetails(data.items[0]))
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data)=>setVideos(data.items))
  },[id])

  if(!videoDetails?.snippet) return 'Loading...'

  const {
    snippet:{
      title,channelId,channelTitle
    }, 
    statistics:{
      viewCount,likeCount
    }
  } = videoDetails;
  console.log(videoDetails)
  return (
    <Box minHeight='120vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'10vh'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player"/>
            <Typography color="#fff" variant='h5' fontWeight='bold' p={2}> 
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' paddingY={1}
              paddingX={2} sx={{
              color:'#fff',
            }}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{xs:'subtitle1', md:'h5'}} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '1em', color:'#3e3e3e', ml:'5px'}} />
                </Typography>
              </Link> 
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{opacity: 0.7}}>
                    {parseInt(viewCount).toLocaleString('en-US')} views
                </Typography>
                <Typography variant='body1' sx={{opacity: 0.7}}>
                    {parseInt(likeCount).toLocaleString('en-US')} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box px={2} py={{xs:'5', md:'1'}} justifyContent='center' alignItems='center'>
        <VideosFeed videos={videos} flexDirections='column'></VideosFeed>
      </Box>
      </Stack>


    </Box>
  )
}

export default VideoDetails