export const initialState = {
    todos: []
  };
  
  export function todoReducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return { ...state, todos: [...state.todos, action.payload] };
      case 'REMOVE_TODO':
        return { ...state, todos: state.todos.filter((_, index) => index !== action.payload) };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };
      case 'EDIT_TODO':
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.index
              ? { ...todo, title: action.payload.newTitle }
              : todo
          )
        };
      default:
        return state;
    }
  };

  export function todosLenght(state){
    return state.todos;
  }
