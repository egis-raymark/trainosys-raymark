import React from 'react'

interface PokeType{
    type:string
}

const TypeComponent = ({type}:PokeType) => {
    var color = '#c2c4c3'
    if (type == 'grass')
        color = '#5ced77'
    if (type == 'fire')
        color = '#e82c39'
    if (type == 'water')
        color = '#1d78e0'
    if (type == 'electric')
        color = '#d6e01d'
    if (type == 'normal')
        color = '#a8a878'
    if (type == 'dark')
        color = '#333634'
    if (type == 'flying')
        color = '#a890f0'
    if (type == 'poison')
        color = '#a040a0'
  return (
    <>
        <div>
            <button style={{color :'white', backgroundColor: color, border: '1px solid '+color, borderRadius:'20%'}}>
                {type}
            </button>
        </div>
    </>
  )
}

export default  TypeComponent