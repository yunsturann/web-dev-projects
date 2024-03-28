import { Avatar } from "@mui/material";
import { FC } from "react";
import { AvatarItemProps } from "../../types";

const AvatarItem: FC<AvatarItemProps> = ({ alt, src }) => {
  return <Avatar alt={alt} src={src} />;
};

export default AvatarItem;
