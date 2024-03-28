// ** Material UI Components
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
// ** Icons
import { Mail, Notifications, Pets } from "@mui/icons-material";
// ** React

import AvatarMenu from "./AvatarMenu";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          YUNUS
        </Typography>

        <Pets sx={{ display: { xs: "block", sm: "none" } }} />

        <Search>
          <InputBase placeholder="search..." sx={{ width: "100%" }} />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>

          <AvatarMenu />
        </Icons>

        <UserBox>
          <AvatarMenu />
          <Typography>Yunus</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
