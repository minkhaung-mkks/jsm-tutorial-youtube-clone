import React from 'react';
import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material'
import {Sidebar,VideosFeed} from './exports';
import {fetchFromAPI} from '../utils/FetchFromAPI'
/**
 * A component that displays a feed of videos based on a selected category. 
 * 
 * Includes the sidebar to select categories.
 * 
 * @returns {JSX.Element} - A Stack containing a Sidebar and a VideosFeed component.
 */

const Feed = () => {

  const [selectedCategory, setSelectedCategory]=useState('New')
  const [videos,setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data?.items))
  },[selectedCategory])

  return (
    <Stack sx={{
      flexDirection: {
        sx:"column", md:"row"
      }
    }}>
        <Box sx={{
            height:{sx:'auto', md:'92vh'}, 
            borderRight:'1px solid #3d3d3d', 
            padding:{sx:0,md:2}
          }}>
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory ={setSelectedCategory }
            >
            </Sidebar>
            <Typography className="copyright" variant="body2" sx={{
              marginTop:1.5,
              color: '#fff'
            }}>
              Copyright 2023 ytClone 
            </Typography>
        </Box>
        <Box p={2} sx={{
          overflowY:'auto',
          height: '90vh',
          flex: 2 
        }}>
          <Typography variant='h4' mb={2} sx={{color:'#fff'}}>
            {selectedCategory}  <span style={{ color: '#f31503'}}>
              &nbsp;Videos
            </span> 
          </Typography>
          <VideosFeed videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed