import React from 'react'


type ButtonProps = {
    label:String,
    Type: "OK"| "NOK"
}

const AddCartButton = (props: ButtonProps) => {

    var classVal = props.Type === "OK" ? "btn btn-icon btn-primary btn-sm add-button btn-block" : "btn btn-icon btn-secondary btn-sm add-button btn-block";

  return (
    <>
        <div>
        <button className={classVal} type="button">
            <span className="btn-inner--icon"><i className="ni ni-bag-17"></i></span>
            <span className="btn-inner--text button-text">{props.label}</span>
        </button>
        </div>
    </>
  )
}

export default AddCartButton
