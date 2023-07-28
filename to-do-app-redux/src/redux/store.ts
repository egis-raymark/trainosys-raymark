import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './reducer'

const store = configureStore({
    reducer : {
        tasks: tasksReducer,
    }
})

//Define the RootState type to represent the overall state o the Redux store
export type RootState = ReturnType<typeof store.getState>
export default store