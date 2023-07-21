import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/css/argon-dashboard.css'
import './assets/css/argon-dashboard.min.css'

import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import TaskComponent from './Components/TaskComponent'
import ButtonComponent from './Components/ButtonComponent'

function App() {
  const [taskText , setTaskText] = useState<string>("")
  const [task,setTask] = useState<string[]>([])

  const hanldeTaskInput = (e: ChangeEvent<HTMLInputElement>) : void => {
    setTaskText(e.target.value)

    
  }

  const handleAddTaskButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    if (taskText.length == 0){
      return
    }

    var newItem = taskText 
    setTask([...task, newItem]);

    setTaskText('')
  };
 


  return (
    <>
      <div>
        



        <div className='row center-component'>
          <div className='col-6 task-field'>
              <input type='text' placeholder='Input Task' value={taskText} onChange={(e) => hanldeTaskInput(e)}/>
          </div>
          <div className='col-6 add-task'>
              <ButtonComponent buttonType='Add' isEnabled={true} onclickButton={handleAddTaskButton}/>
          </div>
        </div>
        { 
        task.length == 0? 
        <p className='no-task'>No Task</p> : 
        task.map((task, index)=>(
          <TaskComponent key={index} task={task} />
        ))}
        
        
      </div>
      

    </>
  )
}

export default App
