import React from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function SearchBar() {

  const [searchTerm, setsearchTerm] = useState("")

  const navigate = useNavigate();

  const handleSubmit= (event) => {
    event.preventDefault();

    if (searchTerm){
      navigate(`/search/${searchTerm}`)

      setsearchTerm("")
    }
  }

  return (
    <Paper
      component="form"
      sx={{ borderRadius: 20, border: "1px solid #e3e3e3", boxShadow: "none", pl:2 }}
      onSubmit={handleSubmit}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setsearchTerm(event.target.value)}
      />
      <IconButton>
        <Search type="submit" sx={{ color:"red", p:"1px", pr:'2px' }}/>
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
