import { UserType } from "@/types/user";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: UserType | {};
}

const initialState: UserState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, () => {
        //console.log("fetching user");
      })
      .addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<UserType>) => {
          state.user = action.payload;
        }
      );
  },
});

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return Promise.resolve({ id: 1, name: "john doe" });
});

// export const {} = counterSlice.actions;

export default userSlice.reducer;
