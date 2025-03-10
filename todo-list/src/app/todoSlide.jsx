import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoSlide = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todos: (state, action) => {
      state.value.push(action.payload)
    }
  },
})

export const { todos } = todoSlide.actions

export default todoSlide.reducer