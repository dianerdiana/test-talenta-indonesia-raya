// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Import
import axios from '../../@fake-db/config'

export const getAllData = createAsyncThunk('users/getAllData', async () => {
  try {
    const response = await axios.get('/users/list')
    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const getData = createAsyncThunk('users/getData', async () => {
  try {
    const response = await axios.get('/users/list')
    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const addUser = createAsyncThunk(
  'user/addUser',
  async (user, { dispatch, getState }) => {
    await axios.post('/add-user', user)
    await dispatch(getData(getState().users.params))
    await dispatch(getAllData())
    return user
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    allData: [],
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload
      })
  },
})

export default usersSlice.reducer
