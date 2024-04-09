// ** Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ** Types
import { UserType, UserTypeWithId } from "@/types/UserType";
import axios from "axios";
import { PayloadResponse, PayloadResponseWithId } from "@/types/Responses";

interface UserState {
  user: UserTypeWithId | null;
  users: UserTypeWithId[];
  error: string;
  response: string;
  loading: boolean;
  loadingButton: boolean;
}

const initialState: UserState = {
  user: null,
  users: [],
  error: "",
  response: "",
  loading: false,
  loadingButton: false,
};

export const postUser = createAsyncThunk(
  "users/postUser",
  async (data: UserType) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user`,
      data
    );
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: string) => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${id}`
    );
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (data: UserTypeWithId) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${data._id}`,
      data
    );
    return response.data;
  }
);

export const getUser = createAsyncThunk(
  "users/getUser",
  async ({ _id }: { _id: string }) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${_id}`
    );
    return response.data;
  }
);

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user`
  );
  return response.data;
});

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    clearResponse(state) {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      postUser.fulfilled,
      (state, { payload }: PayloadResponse) => {
        state.response = payload.message;
        state.loading = false;
      }
    );
    builder.addCase(postUser.rejected, (state, { error }) => {
      state.error = error.message!;
      state.loading = false;
    });

    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        getUsers.fulfilled,
        (state, { payload }: { payload: UserTypeWithId[] }) => {
          state.users = payload;
          state.loading = false;
        }
      )
      .addCase(getUsers.rejected, (state, { error }) => {
        state.error = error.message!;
        state.loading = false;
      });

    builder
      .addCase(deleteUser.pending, (state) => {
        state.loadingButton = true;
        state.error = "";
      })
      .addCase(
        deleteUser.fulfilled,
        (state, { payload }: PayloadResponseWithId) => {
          state.loadingButton = false;
          state.response = payload.message;
          state.users = state.users.filter((user) => user._id !== payload._id);
        }
      )
      .addCase(deleteUser.rejected, (state, { error }) => {
        state.error = error.message!;
        state.loadingButton = false;
      });

    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        getUser.fulfilled,
        (state, { payload }: { payload: UserTypeWithId }) => {
          state.user = payload;
          state.loading = false;
        }
      )
      .addCase(getUser.rejected, (state, { error }) => {
        state.error = error.message!;
        state.loading = false;
      });

    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateUser.fulfilled, (state, { payload }: PayloadResponse) => {
        state.response = payload.message;
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state, { error }) => {
        state.error = error.message!;
        state.loading = false;
      });
  },
});

export const { clearResponse } = userSlice.actions;
export default userSlice.reducer;
