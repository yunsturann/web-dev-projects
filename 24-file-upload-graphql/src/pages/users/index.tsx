// ** React
import React from "react";

// ** Custom Hooks
import useGetUsers from "@/services/users/hooks/useGetUsers";
import useDeleteUser from "@/services/users/hooks/useDeleteUser";

// ** Utils
import { handleDownload } from "@/lib/utils";

// ** Material UI Components
import { Box, Button, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { LoadingButton } from "@mui/lab";

// ** Icons
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";

// ** Types
import { UserModel } from "@/services/users/types/get-user-model";

interface CellType {
  row: UserModel;
}

// First Way to Download
// const onClickDownload = (e: MouseEvent<HTMLButtonElement>) => {
//   const fileData = (e.target as HTMLElement).parentElement?.parentElement
//     ?.children[2].textContent;

//   if (!fileData) return;

//   handleDownload(fileData, "cv.pdf");
// };

const UsersPage = () => {
  const { data: rows, loading, error } = useGetUsers();
  const { deleteUser, loading: deleteLoading } = useDeleteUser();

  if (error) return <p>Error</p>;

  const columns: GridColDef[] = [
    { flex: 0.1, field: "id", headerName: "ID", minWidth: 100 },
    { flex: 0.1, field: "name", headerName: "Name", minWidth: 150 },
    { flex: 0.1, field: "cv", headerName: "CV", minWidth: 140 },
    {
      flex: 0.1,
      field: "created_at",
      headerName: "Created At",
      minWidth: 100,
      valueGetter: ({ row }) => new Date(row.created_at).toLocaleDateString(),
    },
    {
      flex: 0.1,
      field: "actions",
      headerName: "Actions",
      minWidth: 200,
      align: "center",
      sortable: false,
      // valueGetter: (props) => console.log(props),
      renderCell: ({ row }: CellType) => (
        <Box display="flex" gap={1} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleDownload(row.cv, row.name)}
          >
            Download
          </Button>
          <LoadingButton
            loading={deleteLoading}
            variant="outlined"
            onClick={() => handleDelete(row.id)}
          >
            {/* <DeleteIcon color="error" fontSize="large" />
             */}
            Delete
          </LoadingButton>
        </Box>
      ),
    },
  ];

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this user?") === false) return;

    try {
      await deleteUser({ variables: { id } });
    } catch (error: any) {
      alert(error.message);
    }
  };

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
        slots={{
          toolbar: () => (
            <>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                px={1}
                pt={2}
              >
                <Typography variant="h6">Users</Typography>
                <Box>
                  <IconButton>
                    <FileDownloadIcon color="primary" fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
              <hr />
            </>
          ),
        }}
        rows={rows || []}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // isRowSelectable={() => false}
        disableRowSelectionOnClick
        autoHeight
      />
    </Box>
  );
};

export default UsersPage;
