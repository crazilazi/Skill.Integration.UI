// src/features/auth/services/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { loginApi } from "./authApi";
import { setToken, removeToken } from "../../../utils/tokenUtils"; // Externalize token handling

// Define AuthState interface
interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
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
    return response.token; // Assumes API returns a token field
  } catch (error: any) {
    // Capture any API errors and reject with a meaningful message
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
      removeToken(); // Use the token utility to remove the token
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
        setToken(action.payload); // Save the token using utility function
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Login failed";
      });
  },
});

// Export the actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
