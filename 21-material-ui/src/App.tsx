import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
// ** Custom Components
import Feed from "./components/Feed";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";
// ** MUI
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* NAVBAR */}
        <Navbar />
        {/* SIDEBAR, FEED, RIGHTBAR */}
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        {/* ADD */}
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
