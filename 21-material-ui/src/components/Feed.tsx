// ** MUI Components
import { Box, Skeleton, Stack } from "@mui/material";

// ** Custom Components
import Post from "./Post";
import { useState } from "react";
import { feedItems } from "../constants/homepage/feed";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <Box flex={4} p={2}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {feedItems.map((item, index) => (
            <Post key={index} {...item} />
          ))}
        </>
      )}
    </Box>
  );
};

export default Feed;
