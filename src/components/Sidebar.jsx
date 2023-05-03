import React from 'react'
import { Stack } from '@mui/material'

import { categories } from '../utils/constants'

/**
 * A component that displays a list of categories as buttons and highlights the selected category.
 * 
 * @param {string} selectedCategory - The currently selected category.
 * @param {function} setSelectedCategory - A function that sets the selected category.
 * 
 * @returns {JSX.Element} - A Stack containing buttons representing each category.
 */

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
        sx={{
            flexDirection:{xs:'row',md:'column'},
            height:{xs:'auto', md:'95%'},
            overflowY:'auto'
        }}
    >
        {categories.map( (category) =>(
            <button 
                className="category-btn"
                onClick={()=>setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#FC1503',
                    color:'#fff'
                }}
                key={category.name}
            >
                <span style={{ 
                    color: category.name === selectedCategory ? '#fff' : '#ff0000', 
                    marginRight: '15px'
                }}>
                    {category.icon}
                </span>
                <span style={{opacity: category.name === selectedCategory ? '1' :'0.8'}}>{category.name}</span>
            </button> 
        ) )}
    </Stack>
  )
}

export default Sidebar