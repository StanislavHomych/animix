// store/slices/loginSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронний thunk для логінізації користувача з використанням fetch
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('https://animixserver.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }), // Використовуємо login
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to log in');
      }

      return response.json();
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
