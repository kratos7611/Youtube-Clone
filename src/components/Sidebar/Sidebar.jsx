import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <Stack
    direction="row"
    overflow="auto"
    sx={{ height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: selectedCategory === category.name && "#FC1503",
          color: "#fff",
          key: category.name
        }}
      >
        <span
          style={{
            color: selectedCategory === category.name ? "white" : "#FC1503",
            marginRight: "12px",
          }}
        >
          {category.icon}
        </span>

        <span
          style={{ opacity: selectedCategory === category.name ? "1" : "0.6" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
