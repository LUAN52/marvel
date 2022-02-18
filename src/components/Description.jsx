import React from 'react'
import { DescContainer } from './DescriptionStyled'
import { useData } from '../context/context';
import { PurchaseButton } from './DescriptionStyled';

function Description({item}) {

  const {setClickButton,setCart,cart} = useData()
  return (
    <DescContainer>
        <div>
            <p>{item.title}</p>
            <p>{`R$: ${item.prices[0].price}`}</p>
            <div 
            ><PurchaseButton onClick={()=>{
              setClickButton(true);
              setCart([item,...cart]);
            }}>Comprar</PurchaseButton></div>
           </div>
    </DescContainer>
  )
}

export default Description
