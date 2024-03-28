import {

  AvatarGroup,
  Box,

  ImageList,

  Typography,
} from "@mui/material";

import {
  avatarItems,
  latestPhotoItems,
} from "../../constants/homepage/rightbar";
import AvatarItem from "./AvatarItem";
import LatestPhotoItem from "./LatestPhotoItem";
import LatestConversationList from "./LatestConversationList";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" sx={{ maxWidth: 300 }}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          {avatarItems.map((item) => (
            <AvatarItem key={item.alt} {...item} />
          ))}
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} marginTop="20px">
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          {latestPhotoItems.map((item) => (
            <LatestPhotoItem key={item.title} {...item} />
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100} marginTop="20px">
          Latest Conversations
        </Typography>

        <LatestConversationList />
      </Box>
    </Box>
  );
};

export default Rightbar;
