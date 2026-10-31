import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3000/users";

// 1. REGISTER USER
export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(API, formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Registration failed");
    }
  }
);

// 2. FETCH ALL USERS
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(API);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Fetching users failed");
    }
  }
);

// 3. LOGIN USER
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      // Step 1: fetch user by email
      const res = await axios.get(`${API}?email=${encodeURIComponent(email)}`);
      console.log("Login response:", res.data);

      if (res.data.length === 0) {
        return thunkAPI.rejectWithValue("Email not registered");
      }

      const user = res.data[0];

      // Step 2: check password manually
      if (user.password !== password) {
        return thunkAPI.rejectWithValue("Incorrect password");
      }

      // Step 3: return user if match
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Login failed");
    }
  }
);

// INITIAL STATE
const initialState = {
  list: [],
  user: null,
  status: "idle",
  error: null,
};

// CREATE SLICE
const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // REGISTER USER
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list.push(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // FETCH USERS
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // LOGIN USER
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
