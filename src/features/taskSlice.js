import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/tasks";


// ---------------- FETCH ALL TASKS ----------------

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// ---------------- ADD TASK ----------------

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, taskData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// ---------------- UPDATE TASK ----------------

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, taskData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/${id}`,
        taskData
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// ---------------- DELETE TASK ----------------

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// ---------------- INITIAL STATE ----------------

const initialState = {
  tasks: [],
  loading: false,
  error: null
};


// ---------------- TASK SLICE ----------------

const taskSlice = createSlice({
  name: "tasks",

  initialState,

  reducers: {},

  extraReducers: (builder) => {

    builder

      // FETCH TASKS

      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })

      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })


      // ADD TASK

      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })

      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })


      // UPDATE TASK

      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.tasks.findIndex(
          (task) => String(task.id) === String(action.payload.id)
        );

        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })

      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })


      // DELETE TASK

      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;

        state.tasks = state.tasks.filter(
          (task) => String(task.id) !== String(action.payload)
        );
      })

      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });

  }

});

export default taskSlice.reducer;
