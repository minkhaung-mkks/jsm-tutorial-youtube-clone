import React, { useEffect, useState } from 'react';
import { Box, Typography,Stack } from '@mui/material';

const Comments = () => {
  const [comments,setComments] = useState([])
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(()=>{
    if(window.innerWidth >= 960) {
        setIsMobile(false)
        setIsExpanded(true)
    }
  },[])

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

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
        v
      </Typography>)}
      </Stack>
      {(isExpanded || !isMobile) && (
        <Stack direction='column' mt='2vh' gap='1vh'>
            <Stack direction='column' sx={{ maxWidth: 400 }}  gap='10px'>
                <Typography color='#f3fef3' variant="subtitle1" fontWeight='bold' borderBottom='1px solid #f1f1f1'>
                    Commenter 1
                </Typography>
                <Typography color='#f3fef3' variant="body1">
                    This is the expanded content. It is only shown on mobile devices when the user clicks on the component.
                    On desktop devices, it is always shown.
                </Typography>
            </Stack>
            <Stack direction='column' sx={{ maxWidth: 400 }}  gap='10px'>
                <Typography color='#f3fef3' variant="subtitle1" fontWeight='bold' borderBottom='1px solid #f1f1f1'>
                    Commenter 1
                </Typography>
                <Typography color='#f3fef3' variant="body1">
                    This is the expanded content. It is only shown on mobile devices when the user clicks on the component.
                    On desktop devices, it is always shown.
                </Typography>
            </Stack>
            <Stack direction='column' sx={{ maxWidth: 400 }}  gap='10px'>
                <Typography color='#f3fef3' variant="subtitle1" fontWeight='bold' borderBottom='1px solid #f1f1f1'>
                    Commenter 1
                </Typography>
                <Typography color='#f3fef3' variant="body1">
                    This is the expanded content. It is only shown on mobile devices when the user clicks on the component.
                    On desktop devices, it is always shown.
                </Typography>
            </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default Comments;
