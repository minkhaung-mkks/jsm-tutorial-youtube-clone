import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box} from '@mui/material';

import {VideosFeed, ChannelCard} from './exports';
import {fetchFromAPI} from '../utils/FetchFromAPI';

const ChannelDetails = () => {
  const {id} = useParams();

  const [channelDetails, setChannelDetails] = useState(null);
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=> setChannelDetails(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=> setVideos(data?.items))
  },[id])
  return (
      <Box sx={{minHeight:'95vh'}}>
        <Box>
          <div style={{
            background: `linear-gradient(90deg, rgba(36,0,16,1) 0%, rgba(71,9,121,1) 35%, rgba(73,55,152,1) 50%, rgba(45,112,191,1) 69%, rgba(0,212,255,1) 100%)`,
            zIndex:10,
            height:`30vh`
          }}>
          </div>
          <ChannelCard channelDetails={channelDetails} topMargin='-10vh'/>
        </Box>
        <Box display='flex' p={2} margin='0 auto' marginTop='6vh' >   
          <Box sx={{marginRight:{sm:'8vw'}}}>

          </Box>
          <VideosFeed videos={videos}></VideosFeed>
        </Box>
      </Box>
  )
}

export default ChannelDetails