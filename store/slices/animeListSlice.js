import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAnime = createAsyncThunk("anime/fetchAnime", async () => {
  const response = await fetch("https://keen-cactus-thrill.glitch.me/anime")
  const data = await response.json()
  return data
})

export const addCommentToAnime = createAsyncThunk(
  "anime/addCommentToAnime",
  async (
    { animeId, userId, reviewComment, rating, avatar, date },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `https://keen-cactus-thrill.glitch.me/anime/${animeId}/addComment`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, reviewComment, rating, avatar, date }),
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

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    listOfAnime: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnime.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchAnime.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.listOfAnime = action.payload
      })
      .addCase(fetchAnime.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(addCommentToAnime.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addCommentToAnime.fulfilled, (state) => {
        state.loading = false
        // Можливо, ви хочете оновити інформацію про аніме в стані користувача
      })
      .addCase(addCommentToAnime.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default animeSlice.reducer
