import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/projects";

// FETCH PROJECTS
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ADD PROJECT
export const addProject = createAsyncThunk(
  "projects/addProject",
  async (projectData, thunkAPI) => {
    try {
      const res = await axios.post(API_URL, projectData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// UPDATE PROJECT
export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async ({ id, projectData }, thunkAPI) => {
    try {
      const res = await axios.put(
        `${API_URL}/${id}`,
        projectData
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// DELETE PROJECT
export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// INITIAL STATE
const initialState = {
  projects: [],
  loading: false,
  error: null
};

// PROJECT SLICE
const projectSlice = createSlice({
  name: "projects",
  initialState,

  reducers: {},

  extraReducers: (builder) => {

    // FETCH
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })

      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ADD
    builder
      .addCase(addProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
      })

      .addCase(addProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // UPDATE
    builder
      .addCase(updateProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateProject.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.projects.findIndex(
          (project) =>
            String(project.id) === String(action.payload.id)
        );

        if (index !== -1) {
          state.projects[index] = action.payload;
        }
      })

      .addCase(updateProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // DELETE
    builder
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = false;

        state.projects = state.projects.filter(
          (project) =>
            String(project.id) !== String(action.payload)
        );
      })

      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  }
});

export default projectSlice.reducer;