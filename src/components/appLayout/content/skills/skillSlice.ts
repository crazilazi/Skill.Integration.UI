// employeeSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllSkills, getSkillById } from "./skillApi";

export interface Skill {
  id: string;
  name: string;
  typeId: string;
  typeName:string;
  infoUrl:string;
}

interface SkillState {
  skills: Skill[];
  loading: boolean;
  error: string | null;
}

const initialState: SkillState = {
  skills: [],
  loading: false,
  error: null,
};

// Async thunk to fetch employee data
export const fetchSkill = createAsyncThunk("skill/fetch", async () => {
  const response = await getAllSkills();
  return response.data;
});

// Async thunk to get resource recommend skills
export const fetchSkillById = createAsyncThunk(
  "skill/fetchSkillById",
  async (id: string) => {
    const response = await getSkillById(id);
    // Return both the employeeId and recommended skills as the payload
    return {
      id,
      ...response.data, 
    };
  }
);

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkill.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSkill.fulfilled, (state, action) => {
        state.skills = action.payload;
        state.loading = false;
      })
      .addCase(fetchSkill.rejected, (state, action) => {
        state.error = action.error.message || "Something went wrong";
        state.loading = false;
      })
      .addCase(fetchSkillById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSkillById.fulfilled, (state, action) => {
        state.skills.push(action.payload);
        state.loading = false;
      })
      .addCase(fetchSkillById.rejected, (state, action) => {
        state.error = action.error.message || "Something went wrong";
        state.loading = false;
      })
  },
});

export default skillSlice.reducer;