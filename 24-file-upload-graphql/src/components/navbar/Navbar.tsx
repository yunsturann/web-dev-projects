import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
    </Box>
  );
};

export default Navbar;
