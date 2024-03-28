import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { SidebarItemProps } from "../../types";

const SidebarListItem: FC<SidebarItemProps> = ({
  href,
  icon: Icon,
  primary,
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href}>
        <ListItemIcon sx={{ minWidth: "40px" }}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarListItem;
