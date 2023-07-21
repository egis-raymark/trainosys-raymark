import React,{ ChangeEvent, useState } from 'react'

interface TaskModel{
    task : string
}

const TaskComponent = ({task}:TaskModel) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e : ChangeEvent<HTMLInputElement>): void => {(e)
        setIsChecked(e.target.checked);
    };

    var taskStyle = !isChecked ? "form-control task-text" : "form-control task-text-line";

  return (
    <>
        <div className='task-container'>


            {/* <div className="form-group">
                <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" value={props.task} className={taskStyle} />
                </div>
            </div> */}
            <div className='row'>
                <div className='col-3 center-component'>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} aria-label="Checkbox for following text"/>
                </div>
                <div className='col-9'>
                    {/* <input type='text' className={taskStyle} value={props.task} /> */}
                    <h6 className={taskStyle}>{task}</h6>
                </div>
            
            </div> 
        </div>
        
    </>
  )
}


export default TaskComponent


// <div className='Card card-style'>
//                 <div className="form-group">
//                     <div className="input-group">
//                         <div className="input-group-prepend">
//                             <div className="input-group-text">
//                             <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} aria-label="Checkbox for following text"/>
//                             </div>
//                         </div>
//                     <h6 className={taskStyle}>{props.task}</h6>
//                     </div>
//                 </div>
//             </div>