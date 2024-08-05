// // src/store.ts
// import create from 'zustand';

// interface Todo {
//   id: number;
//   text: string;
// }

// interface TodoStore {
//   todos: Todo[];
//   addTodo: (todo: Todo) => void;
//   removeTodo: (id: number) => void;
//   updateTodo: (id: number, updatedTodo: Todo) => void;
// }

// const useTodoStore = create<TodoStore>((set) => ({
//   todos: [],
//   addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
//   removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
//   updateTodo: (id, updatedTodo) => set((state) => ({
//     todos: state.todos.map((todo) => (todo.id === id ? updatedTodo : todo)),
//   })),
// }));

// export default useTodoStore;


// src/store.ts

import create from 'zustand';

interface AuthenticationStore {
    isLogin: boolean;
    setIsLogin: (status: boolean) => void;
    isRegister: boolean;
    setIsRegister: (status: boolean) => void;
}

const useAuthenticationStore = create<AuthenticationStore>((set) => ({
    isLogin: false,
    setIsLogin: (status: boolean) => set({ isLogin: status }),
    isRegister: false,
    setIsRegister: (status: boolean) => set({ isRegister: status })
}));

export default useAuthenticationStore;
