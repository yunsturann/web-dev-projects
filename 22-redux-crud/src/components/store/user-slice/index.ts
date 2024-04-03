// ** Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ** Types
import { UserType, UserTypeWithId } from "@/types/UserType";
import axios from "axios";

interface UserState {
  users: UserTypeWithId[];
  error: string;
  loading: boolean;
  response: string;
}

const initialState: UserState = {
  users: [],
  error: "",
  loading: false,
  response: "",
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

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user`
  );
  return response.data;
});

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      postUser.fulfilled,
      (state, { payload }: { payload: { message: string } }) => {
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
  },
});

export default userSlice.reducer;
