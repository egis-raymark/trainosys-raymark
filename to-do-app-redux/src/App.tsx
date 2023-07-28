import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import AddTask from './components/AddTask/AddTask'
import Task from './components/Task/Task'
import { addTask } from './redux/reducer'


interface Task{
  id: number
  title: string
  completed: boolean
}

function App() {
  const tasks: Task[] = useSelector((state: RootState) => state.tasks.tasks)
  const dispatch = useDispatch()

  return (
    <>
      <div style={{textAlign: 'center', margin: '50px'}}>
        <h1>Task Manager</h1>
        <AddTask />
      </div>
      <div style={{display : 'flex', justifyContent: 'center'}}>
        <ul>
          {
          tasks.map(
            (taskItem)=> 
            <Task key={taskItem.id} id={taskItem.id} name={taskItem.title} completed={taskItem.completed} />
          )
          }
        </ul>
      </div>
      
    </>
  )
}

export default App
