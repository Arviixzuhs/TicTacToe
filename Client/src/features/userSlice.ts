import { createSlice } from '@reduxjs/toolkit'

export const manageUsersSlice = createSlice({
  name: 'user',
  initialState: {
    turn: '',
    room: null,
    name: '',
  },
  reducers: {
    setMyUser: (state, action) => {
      return action.payload
    },
  },
})

export const { setMyUser } = manageUsersSlice.actions
