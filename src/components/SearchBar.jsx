import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper,IconButton } from '@mui/material';

import {Search} from '@mui/icons-material'
/**
 * 
 * A Form element with an input field to act as a Search Bar.
 * 
 * @returns {JSX.Element} A Form with an input field, onSubmit redirects to SearchFeed with the value in the input field as the searchTerm.
 */
const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
        }
    }
  return (
    <Paper
        component='form'
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            paddingLeft: 2,
            boxShadow: 'none',
            marginRight:{sm:5}
        }}
    >
        <input 
            className='search-bar' 
            type="text" 
            placeholder='Search...'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{padding:'10px', color: 'red'}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar