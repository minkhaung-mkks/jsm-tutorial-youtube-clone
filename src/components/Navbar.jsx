import React from 'react';

import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import {logo} from '../utils/constants';
import SearchBar from './SearchBar';

/**
 *
 * Main Navbar for the App
 * 
 * 
 * Present on All Pages
 * 
 */
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      zIndex={20}
      p={2}
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
      <Link to='/' style={{display: 'flex', alignItems:'center'}}>
        <img src={logo} alt="Logo of the App"  height={50}/>
      </Link>
      <SearchBar></SearchBar>
    </Stack>
  )
}


export default Navbar