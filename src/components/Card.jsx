import React, { useEffect, useState } from 'react';
import { CardContainer } from './CardStyled';
import api from "../api/api"

function Card() {

  const [setState,state] = useState([]);

  useEffect(()=>{
    const getComic =async()=>{

      const {data} = await api.getComics();
      console.log(data);

    }

    getComic();
  },[])

  return (
    <CardContainer>
      {/* <img alt="imagem quadrinho"></img> */}
    </CardContainer>
  )
}

export default Card