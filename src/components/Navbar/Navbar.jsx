import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../../utils/constants";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        justifyContent: "space-between",
        top: 0,
      }}
    >
      <Link to="/" alignItems="center" display="flex">
        <img src={logo} alt="logo" height={45} />
      </Link>

      <SearchBar />
    </Stack>
  );
}

export default Navbar;
