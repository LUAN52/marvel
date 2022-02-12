import React from 'react';
import { CardContainer } from './CardStyled';

function Card(props) {

  

  

  return (
    <CardContainer>
        <img src={props.url.path + "/portrait_xlarge.jpg"} alt="img quandrinho"/>
    </CardContainer>
  )

  
}

export default Card