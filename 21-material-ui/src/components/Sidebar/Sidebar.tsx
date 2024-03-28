// ** Material UI Icons
import { ModeNight } from "@mui/icons-material";

// ** Material UI Components
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import { FC } from "react";
import { sidebarItems } from "../../constants/homepage/sidebar";
import SidebarListItem from "./SidebarListItem";

interface SidebarProps {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const Sidebar: FC<SidebarProps> = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {sidebarItems.map((item, index) => (
            <SidebarListItem key={index} {...item} />
          ))}

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
