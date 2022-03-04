import React from 'react'
import { PurchaseContainer ,PurButton} from './PurchaseButtonStyled'
import { useNavigate} from 'react-router'

function PurchaseButton() {
const navi= useNavigate();
   
  return (
    <PurchaseContainer>
        <PurButton type='button' onClick={()=>{
           navi("/purchase")
        }} color="green">Comprar</PurButton>
        <PurButton onClick={()=>{
          navi("/marvel")
        }} color="purple">Cancelar</PurButton> 
    </PurchaseContainer>
  )
}

export default PurchaseButton
