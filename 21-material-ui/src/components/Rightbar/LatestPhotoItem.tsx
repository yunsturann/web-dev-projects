import React from "react";
import { LatestPhotoItemProps } from "../../types";
import { ImageListItem } from "@mui/material";

const LatestPhotoItem: React.FC<LatestPhotoItemProps> = ({ src, title }) => {
  return (
    <ImageListItem>
      <img src={src} alt={title} />
    </ImageListItem>
  );
};

export default LatestPhotoItem;
