import React, { useEffect, useState } from 'react';
import { Box, Typography,Stack } from '@mui/material';
import { fetchFromAPI } from '../utils/FetchFromAPI';
import { decodeHtml } from '../utils/decoder';

const Comments = ({id}) => {
  const [comments,setComments] = useState([])
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(()=>{
    if(window.innerWidth >= 960) {
        setIsMobile(false)
        setIsExpanded(true)
    }
  },[])

  useEffect(()=>{
    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
        .then((data) => {
            const sortedComments = data.items.sort((a, b) => {
                return b.snippet.topLevelComment.snippet.likeCount - a.snippet.topLevelComment.snippet.likeCount;
              });
              setComments(sortedComments);        
        })
  },[id])

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  if(!comments?.length) return 'Loading Comments...'
  return (
    <Box
      sx={{
        width: {xs:'85%', md:'100%'},
        margin:'0 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        border: (isMobile && !isExpanded) ? '1px solid #ccc' : 'none',
        borderRadius: 4,
        cursor: {xs:'pointer', md:'default'},
        backgroundColor: 'transparent',
        transition: 'background-color 0.2s ease-in-out',
        '&:hover': {
          backgroundColor: {xs:'#1e1e1e', md:'transparent'},
        },
      }}
      onClick={isMobile ? handleToggle : ()=>{}}
    >
      
      <Stack direction='row' alignContent='space-between' justifyContent='space-between' borderBottom='1px dashed #f1f1f1'>
        <Typography variant="h6" color='#fff' sx={{ mb: 1 } }>
            Comments
        </Typography>
        {isMobile && (<Typography color='#fff' variant="h6" sx={{ mb: 1 }} >
            {isExpanded ? '-' : 'v'}  
        </Typography>)}
      </Stack>
      {(isExpanded || !isMobile) && (
        <Stack direction='column' mt='2vh' gap='3vh'>
            
            {comments.map((comment)=>(
                <Stack direction='column' sx={{ maxWidth: {xs:'100%', md:'70vw'} }}  gap='10px'>
                    <Typography color='#f3fef3' variant="subtitle1" fontWeight='bold' borderBottom='1px solid #f1f1f1'>
                    {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                    </Typography>
                    <Typography color='#f3fef3' variant="body1" sx={{ wordBreak:'break-all', maxWidth: {xs:'100%', md:'70vw'} }}>
                        {decodeHtml( comment?.snippet?.topLevelComment?.snippet?.textDisplay )}
                    </Typography>
                    <Typography color='#fefefe' variant="caption" sx={{ wordBreak:'break-all', maxWidth: {xs:'100%', md:'70vw'} }}>
                        {comment?.snippet?.topLevelComment?.snippet?.likeCount} Likes
                    </Typography>
                </Stack>
            ))}
        </Stack>
      )}
    </Box>
  );
};

export default Comments;
