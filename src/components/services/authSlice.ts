// src/features/auth/services/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { loginApi } from "./authApi";
import { setToken, removeToken, getToken } from "../../utils/tokenUtils"; // Import getToken utility

// Define AuthState interface
interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Set token from localStorage if available
const initialState: AuthState = {
  token: getToken(), // Rehydrate from localStorage
  loading: false,
  error: null,
};

// Define return types and payload for login thunk
export const login = createAsyncThunk<
  string, // Return type (the token)
  { username: string; password: string }, // Argument type
  { rejectValue: string } // Rejection type
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginApi(credentials);
    console.log(response);
    return response.token; // Assumes API returns a token field
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Login failed");
  }
});

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      removeToken(); // Remove token from localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.loading = false;
        setToken(action.payload); // Save token to localStorage
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
