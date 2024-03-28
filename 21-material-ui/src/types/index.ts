import { OverridableComponent } from "@mui/material/OverridableComponent";
// import { sidebarItems } from "../constants/homepage/sidebar";
import { SvgIconTypeMap } from "@mui/material";

// export type SidebarItemProps = (typeof sidebarItems)[number];

export type SidebarItemProps = {
  href: string;
  primary: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
};

export type AvatarItemProps = {
  alt: string;
  src: string;
};

export type LatestPhotoItemProps = {
  src: string;
  title: string;
};

export type LatestConversationItemProps = {
  primary: string;
  secondary: string;
  avatar: {
    alt: string;
    src: string;
  };
};

export type FeedItemProps = {
  title: string;
  subtitle: string;
  avatar: AvatarItemProps;
  image: LatestPhotoItemProps;
};
