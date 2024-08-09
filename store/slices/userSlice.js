import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Регістрація користувача
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://keen-cactus-thrill.glitch.me/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        return rejectWithValue(errorData.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Оновлення колекції користувача
export const updateUserCollection = createAsyncThunk(
  "user/updateUserCollection",
  async (
    { userId, collectionType, movieId, season, episode },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `https://keen-cactus-thrill.glitch.me/users/${userId}/updateCollection`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ collectionType, movieId, season, episode }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        return rejectWithValue(errorData.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Оновлення масиву recentlyWatched
export const updateRecentlyWatched = createAsyncThunk(
  "user/updateRecentlyWatched",
  async ({ userId, movieId, season, episode }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://keen-cactus-thrill.glitch.me/users/${userId}/updateRecentlyWatched`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ movieId, season, episode }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        return rejectWithValue(errorData.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Фетчення всіх користувачів
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://keen-cactus-thrill.glitch.me/users")

      if (!response.ok) {
        const errorData = await response.json()
        return rejectWithValue(errorData.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Додавання коментаря користувача
export const addCommentToUser = createAsyncThunk(
  "user/addCommentToUser",
  async (
    { userId, animeId, reviewComment, rating, cover, date },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `https://keen-cactus-thrill.glitch.me/users/${userId}/addComment`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ animeId, reviewComment, rating, cover, date }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        return rejectWithValue(errorData.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      // Логування даних FormData
      for (let [key, value] of profileData.entries()) {
        console.log(key, value)
      }

      const response = await fetch(
        "https://keen-cactus-thrill.glitch.me/profile",
        {
          method: "POST",
          body: profileData,
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        return rejectWithValue(errorData.message || "Failed to update profile")
      }

      const data = await response.json()
      return data.user // Повертаємо тільки дані користувача
    } catch (error) {
      return rejectWithValue({ message: error.message })
    }
  }
)

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async ({ userId, oldPassword, newPassword }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://keen-cactus-thrill.glitch.me/users/${userId}/changePassword`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ oldPassword, newPassword }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        return rejectWithValue(errorData.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Завантаження аватара користувача
export const uploadAvatar = createAsyncThunk(
  "user/uploadAvatar",
  async ({ userId, avatarFile }, { rejectWithValue }) => {
    const formData = new FormData()
    formData.append("avatar", avatarFile)

    try {
      const response = await fetch(
        `https://keen-cactus-thrill.glitch.me/users/${userId}/uploadAvatar`,
        {
          method: "POST",
          body: formData,
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        return rejectWithValue(errorData.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    users: [],
    error: null,
    loading: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateRecentlyWatched.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateRecentlyWatched.fulfilled, (state, action) => {
        state.loading = false
        if (state.user) {
          state.user.recentlyWatched = action.payload.recentlyWatched
        }
      })
      .addCase(updateRecentlyWatched.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateUserCollection.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUserCollection.fulfilled, (state, action) => {
        state.loading = false
        if (state.user) {
          state.user.userCollection = action.payload.userCollection
        }
      })
      .addCase(updateUserCollection.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(addCommentToUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addCommentToUser.fulfilled, (state, action) => {
        state.loading = false
        if (state.user) {
          state.user.comments = action.payload.comments
        }
      })
      .addCase(addCommentToUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(uploadAvatar.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.loading = false
        if (state.user) {
          state.user.avatar = action.payload.avatar
        }
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearError } = userSlice.actions

export default userSlice.reducer
