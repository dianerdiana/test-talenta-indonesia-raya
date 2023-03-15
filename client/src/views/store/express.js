// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Import
import axios from '../../config/axios'

export const getAllData = createAsyncThunk('expressUser/getAllData', async () => {
  try {
    const response = await axios.get('/user/list')
    return response.data.data
  } catch (error) {
    return error.response.data
  }
})

export const getBarData = createAsyncThunk('expressUser/getBarData', async () => {
  try {
    const response = await axios.get('/user/bar')
    return response.data.data
  } catch (error) {
    return error.response.data
  }
})

export const addUser = createAsyncThunk('expressUser/addUser', async (user, { dispatch, getState }) => {
  try {
    const response = await axios.post('/user', user)
    await dispatch(getAllData())
    await dispatch(getBarData())
    return response.data
  } catch (error) {
    return error.response.data
  }
})

const expressUsers = createSlice({
  name: 'express',
  initialState: {
    allData: [],
    data: [],
    bar: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload
      })
      .addCase(getBarData.fulfilled, (state, action) => {
        state.bar = action.payload
      })
  },
})

export default expressUsers.reducer
