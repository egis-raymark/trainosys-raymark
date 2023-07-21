import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/css/argon-dashboard.css'
import './assets/css/argon-dashboard.min.css'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import ProductCardComponent from './Components/ProductCardComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className='row'>
          <div className='col'> 
          <ProductCardComponent 
            title='Basic Tee' 
            imageUrl='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg' 
            price='PHP 35' 
            buttonText='Add to cart' 
            buttonType="OK" />
          </div>
          <div className='col'>
            <ProductCardComponent 
              title='Basic White Tee' 
              imageUrl='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg' 
              price='PHP 35' 
              buttonText='Add to cart' 
              buttonType="OK" />
          </div>
          <div className='col'>
            <ProductCardComponent 
              title='Basic Charcoal Tee' 
              imageUrl='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg' 
              price='PHP 35' 
              buttonText='Sold out' 
              buttonType="NOK" />
          </div>
          <div className='col'>
            <ProductCardComponent 
              title='Artwork Dots Tee' 
              imageUrl='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg' 
              price='PHP 35' 
              buttonText='Sold out' 
              buttonType="NOK" />
          </div>
        </div>
        
        
        
        
      </div>
    </>
    
  )
}

export default App
