import { Country } from "@/types/country-model";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CountriesState {
  isLoading: boolean;
  isError: boolean;
  initialCountries: Country[];
  countries: Country[];
}

const initialState: CountriesState = {
  isLoading: false,
  isError: false,
  initialCountries: [],
  countries: [],
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all`);
    return response.data;
  }
);

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    filterCountries: (state, { payload }: PayloadAction<string>) => {
      if (payload === "all") {
        state.countries = state.initialCountries;
      } else {
        state.countries = state.initialCountries.filter((country) =>
          country.region.toLowerCase().includes(payload.toLowerCase())
        );
      }
    },
    searchCountries: (state, action: PayloadAction<string>) => {
      state.countries = state.initialCountries.filter((country) =>
        country.name.official
          .toLowerCase()
          .includes(action.payload.toLowerCase())
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<Country[]>) => {
          state.initialCountries = action.payload;
          state.countries = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchCountries.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { filterCountries, searchCountries } = countrySlice.actions;

export default countrySlice.reducer;
