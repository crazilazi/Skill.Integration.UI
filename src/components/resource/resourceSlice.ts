// employeeSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllResources } from "./resourceApi";

export interface Resource {
  id: string;
  name: string;
  currentPosition: string;
  skills: string[];
}

interface ResourceState {
  resources: Resource[];
  loading: boolean;
  error: string | null;
}

const initialState: ResourceState = {
  resources: [],
  loading: false,
  error: null,
};

// Async thunk to fetch employee data
export const fetchResources = createAsyncThunk("resource/fetch", async () => {
  const response = await getAllResources();
  return response.data;
});

const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResources.pending, (state) => {
        state.loading = true;
        console.log(state);
      })
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.resources = action.payload;
        state.loading = false;
        console.log(action);
      })
      .addCase(fetchResources.rejected, (state, action) => {
        state.error = action.error.message || "Something went wrong";
        state.loading = false;
        console.log(action);
      });
  },
});

export default resourceSlice.reducer;
