import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { CartContainer, CartIconContainer } from './CartIconStyled';
import { useData } from '../context/context';


function CartIcon(){

  const {clickButton,setClickButton} = useData()
  return (
    <CartContainer>
              <BsFillCartFill onClick={()=>{
                 
              }} style={{marginLeft:"10px"}} /> 
         
           <CartIconContainer to="/Cart" onMouseOver={()=>{

              setClickButton(false)
           }}>
             {clickButton?<b>+1</b>:null}
             </CartIconContainer>  
             
     </CartContainer>
         
  )
}

export default CartIcon