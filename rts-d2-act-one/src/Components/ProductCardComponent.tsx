import React from 'react'
import AddCartButton from './AddCartButton';
import { ProductCardProps } from './Types';




const CardStyle = {
  width: 18,
};

const ProductCardComponent = (props:ProductCardProps) => {


  return (
    <>
      <div>
      
        <div className="card card-hover" >
          <img className="card-img-top" src={props.imageUrl} alt="Card image cap"/>
          <div className="card-body">
            <h6 className="card-title product-title">{props.title}</h6>
            <p className="card-text product-price ">{props.price}</p>
            <AddCartButton label={props.buttonText} Type={props.buttonType}/>
            
          </div>
        </div>
      </div>
    </>
  )
}


export default ProductCardComponent