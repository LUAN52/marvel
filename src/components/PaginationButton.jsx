import React from 'react'
import { ButtonContainer, ButtonS } from './PaginationButtonStyled'

export default function PaginationButton(props) {
  return (
    <ButtonContainer>
        {console.log(props)}
        <ButtonS onClick={()=>{
            if(props.position.firstPosition!==0){
                
                props.setPosition({firstPosition:0,
                    lastPosition:10})
            }
        }}>1</ButtonS>
        <ButtonS onClick={()=>{
            if(props.position.firstPosition===0){
               
                props.setPosition({firstPosition:10,
                lastPosition:20})
            }
        }}>2</ButtonS>
    </ButtonContainer>
  )
}
