import { configureStore } from '@reduxjs/toolkit'
import { manageUsersSlice } from '../features/userSlice'

const store = configureStore({
  reducer: {
    user: manageUsersSlice.reducer,
  },
})

export default store
