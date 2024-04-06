import { Box, Button, TextField, Typography, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { toBase64 } from "@/lib/utils";
import useInsertUser from "@/services/homepage/hooks/useInsertUser";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Home() {
  // hooks
  const { addUser, loading } = useInsertUser();

  // states
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    // check is file pdf otherwise return alert

    if (files && files.length > 0) {
      const file = files[0];
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file");
        return;
      }
      setFile(file);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a file");
      return;
    }
    if (!name) {
      alert("Please enter a name");
      return;
    }

    const convertedFile = await toBase64(file);

    try {
      await addUser({
        variables: { name, cv: convertedFile },
      });
      alert("Successfully added user!");
      setName("");
      setFile(null);
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
          textAlign: "center",
          border: "1px solid gray",
          padding: "1rem",
          borderRadius: "5px",
          width: "70%",
        }}
      >
        <Typography variant="h5">Hello World</Typography>

        <TextField
          label="Name"
          variant="outlined"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" onChange={onChangeFile} required />
        </Button>
        {file && <Typography>File: {file.name}</Typography>}

        <Button
          variant="contained"
          color="success"
          sx={{ width: "400px" }}
          onClick={handleSubmit}
          disabled={loading}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
