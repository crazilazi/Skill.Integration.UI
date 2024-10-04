// employeeSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllResources, getResourceRecommendSkills } from "./resourceApi";

export interface Resource {
  id: string;
  name: string;
  currentPosition: string;
  skills: string[];
}

export interface IRecommendedSkill {
  skill: string;
  score: number;
}

interface ResourceState {
  resources: Resource[];
  recommendedSkills: Record<string, IRecommendedSkill[]>;
  loading: boolean;
  error: string | null;
}

const initialState: ResourceState = {
  resources: [],
  recommendedSkills: {},
  loading: false,
  error: null,
};

// Async thunk to fetch employee data
export const fetchResources = createAsyncThunk("resource/fetch", async () => {
  const response = await getAllResources();
  return response.data;
});

// Async thunk to get resource recommend skills
export const fetchResourceRecommendSkills = createAsyncThunk(
  "resource/fetchRecommendSkills",
  async (id: string) => {
    const response = await getResourceRecommendSkills(id);
    // Return both the employeeId and recommended skills as the payload
    return {
      id, // The ID of the selected resource
      recommendedSkills: response.data, // The recommended skills for that employee
    };
  }
);

const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResources.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.resources = action.payload;
        state.loading = false;
      })
      .addCase(fetchResources.rejected, (state, action) => {
        state.error = action.error.message || "Something went wrong";
        state.loading = false;
      })
      .addCase(fetchResourceRecommendSkills.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResourceRecommendSkills.fulfilled, (state, action) => {
        const { id, recommendedSkills } = action.payload;
        state.recommendedSkills[id] = recommendedSkills;
        state.loading = false;
      })
      .addCase(fetchResourceRecommendSkills.rejected, (state, action) => {
        state.error = action.error.message || "Something went wrong";
        state.loading = false;
      });
  },
});

export default resourceSlice.reducer;
