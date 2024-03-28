import "./App.css";
import { Button, styled } from "@mui/material";
import { Add, OneKPlus, Settings } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 2,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  const OtherBlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
  }));

  return (
    <main>
      <Button variant="text">Text</Button>

      <Button
        variant="contained"
        color="success"
        startIcon={<OneKPlus />}
        size="large"
      >
        Success
      </Button>

      <Button
        variant="contained"
        color="secondary"
        startIcon={<Add />}
        size="large"
      >
        Add New Post
      </Button>

      <Button variant="outlined" disabled endIcon={<Settings />}>
        Settings
      </Button>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 2,
          "&:hover": {
            backgroundColor: "lightblue",
          },
        }}
      >
        My Unique Button
      </Button>

      <BlueButton size="large">My Blue Button</BlueButton>

      <OtherBlueButton size="large">My Other Blue Button</OtherBlueButton>
    </main>
  );
}

export default App;
