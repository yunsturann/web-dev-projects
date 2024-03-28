// ** Material-UI Components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

// ** React
import { Fragment } from "react";

// ** Constants
import { latestConversationItems } from "../../constants/homepage/rightbar";

const LatestConversationList = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {latestConversationItems.map(
        ({ primary, secondary, avatar: { alt, src } }, index) => (
          <>
            <ListItem alignItems="flex-start" key={index}>
              <ListItemAvatar>
                <Avatar alt={alt} src={src} />
              </ListItemAvatar>
              <ListItemText
                primary={primary}
                secondary={
                  <Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {` — ${secondary}`}
                  </Fragment>
                }
              />
            </ListItem>
            {index !== latestConversationItems.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </>
        )
      )}
    </List>
  );
};

export default LatestConversationList;
