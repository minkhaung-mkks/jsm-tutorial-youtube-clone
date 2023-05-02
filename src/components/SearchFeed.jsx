import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box, Typography} from '@mui/material'
import {VideosFeed} from './exports';
import {fetchFromAPI} from '../utils/FetchFromAPI'

const SearchFeed = () => {

  const {searchTerm} = useParams();
  const [videos,setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data?.items))
  },[searchTerm])

  return (
    
    <Box p={2} sx={{
      overflowY:'auto',
      height: '90vh',
      marginLeft: '8vw',
      flex: 2 
    }}>
      
      <Typography variant='h4' mb={2} sx={{color:'#fff'}}>
        Videos for <span style={{ color: '#f31503'}}>
        {searchTerm} 
        </span> 
      </Typography>
      <VideosFeed videos={videos}/>
    </Box>
  )
}

export default SearchFeed