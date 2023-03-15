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

export const addUser = createAsyncThunk('expressUser/addUser', async (user, { dispatch, getState }) => {
  try {
    const response = await axios.post('/user', user)
    // await dispatch(getData(getState().users.params))
    await dispatch(getAllData())
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.allData = action.payload
    })
  },
})

export default expressUsers.reducer
