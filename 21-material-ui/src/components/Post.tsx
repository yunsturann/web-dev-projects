// ** MUI Icons
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

// ** MUI
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { FeedItemProps } from "../types";

const Post: FC<FeedItemProps> = ({ avatar, subtitle, title }) => {
  return (
    <Card sx={{ marginTop: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label={avatar.alt}>
            {avatar.alt.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader="March 28, 2024"
      />

      <CardMedia
        component="img"
        image={avatar.src}
        alt="Paella dish"
        sx={{ height: "20%", maxHeight: "600px" }}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
