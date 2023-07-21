import React from 'react'

interface ButtonDetails{
  buttonType : 'Add'| 'Edit' | 'Delete',
  onclickButton : () => void,
  isEnabled : boolean,
}

const ButtonComponent = ({buttonType, onclickButton, isEnabled} : ButtonDetails) => {
  var buttonColor = buttonType == "Add" ? 'btn btn-icon btn-primary center-component' : 
                    buttonType == 'Edit' ? 'btn btn-icon btn-warning center-component' : 'btn btn-icon btn-danger center-component'

  var buttonIcon = buttonType == 'Add' ? 'ni ni-fat-add' : 
                   buttonType == 'Edit' ? 'ni ni-ruler-pencil' : 'ni ni-fat-remove'

  return (
    <>

      <button className={buttonColor} type="button" onClick={onclickButton} disabled={!isEnabled}>
        <span className="btn-inner--icon"><i className={buttonIcon}></i></span>
        <span className="btn-inner--text button-content">{buttonType}</span>
      </button>
    </>     
  )
}

export default ButtonComponent