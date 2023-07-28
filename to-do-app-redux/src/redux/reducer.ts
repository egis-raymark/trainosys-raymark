import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface Task{
    id: number
    title: string
    completed: boolean
}

interface State{
    tasks: Task[];
}

const initialState: State = {
    tasks: [], //Initialize with an emty array
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<string>) => {
            const newTaskObj: Task = {
                id: state.tasks.length + 1,
                title: action.payload,
                completed: false,
            }
            state.tasks.push(newTaskObj)
        },
        editTask: (state, action: PayloadAction<{id : number, newName: string}>) => {
            const { id, newName } = action.payload;
            const taskIndex = state.tasks.findIndex((task) => task.id === id);
            if (taskIndex !== -1) {
              state.tasks[taskIndex].title = newName;
            }
        },
        deleteTask: (state, action:PayloadAction<number>) => {
            const taskIndex = state.tasks.findIndex((task) => task.id === action.payload);
            if (taskIndex !== -1) {
              state.tasks.splice(taskIndex, 1);
            }
            //state.tasks = state.tasks.filter((task) => task.id !== action.payload) //FILTERING TASK
        },
        CompleteTask: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find((task)=> task.id === action.payload)
            if (task) {
              task.completed = !task.completed
            }
        }
    }
})

export const {addTask, editTask, deleteTask, CompleteTask} = taskSlice.actions
export default taskSlice.reducer