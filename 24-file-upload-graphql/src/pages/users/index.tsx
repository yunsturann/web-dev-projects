import React, { MouseEvent } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useGetUsers from "@/services/users/hooks/useGetUsers";
import { handleDownload } from "@/lib/utils";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "cv", headerName: "CV", width: 250 },
  { field: "created_at", headerName: "Created At", width: 200 },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: () => (
      <Button variant="contained" color="primary" onClick={onClickDownload}>
        Download
      </Button>
    ),
  },
];

const onClickDownload = (e: MouseEvent<HTMLButtonElement>) => {
  const fileData = (e.target as HTMLElement).parentElement?.parentElement
    ?.children[2].textContent;

  if (!fileData) return;

  handleDownload(fileData, "cv.pdf");
};

const UsersPage = () => {
  const { data, loading, error } = useGetUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const rows = data?.map((user) => ({
    id: user.id,
    name: user.name,
    cv: user.cv,
    created_at: user.created_at,
  }));

  if (!rows) return <p>No data</p>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginX: "auto",
        alignItems: "center",
        minHeight: "100vh",
        width: "70%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        isRowSelectable={() => false}
      />
    </Box>
  );
};

export default UsersPage;
