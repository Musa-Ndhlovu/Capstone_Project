import {create} from 'zustand'

const  useTodoStore = create ((set) => ({
    todos: [],
    addTodo: (todo) => {
        set((state) => ({todo: [...state.todos, todo]}));
    },

    removeTodo: (id) => {
        set((state) => ({todos: state.todos.filter(todo => todo.id !== id)}))
    },

    toggleTodo: (id) => {
        set ((state) => ({
            todo:state.todos.map(todo =>
            todo.id ===id ? {...todo, completed: !todo.completed } : todo
            ) 
        }))
    }
}))

export default useTodoStore;