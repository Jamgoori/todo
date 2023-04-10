import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 값을 로컬 스토리지에서 가져옵니다.
const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = action.payload;
  todo.id = state.length + 1; // 새로운 todo의 id를 생성
  state.push(todo);
      // 추가 된 새로운 상태 값을 로컬 스토리지에 저장합니다.
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      // 변경된 상태 값을 로컬 스토리지에 저장합니다.
      localStorage.setItem('todos', JSON.stringify(state));
    },
    // 다른 액션들도 정의할 수 있음
  }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
