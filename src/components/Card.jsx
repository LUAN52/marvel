import React from 'react';
import { CardContainer } from './CardStyled';
import Discription from './Description';

function Card(props) {

  return (
    <CardContainer>
        <img src={props.url.path + "/portrait_xlarge.jpg"} alt="img quandrinho"/>
        <Discription item={props.item}/>
    </CardContainer>
  )

}

export default Card