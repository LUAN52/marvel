import React,{useEffect,useState} from 'react';
import {ContainerList, InnerContainer} from './ContainerStyled';
import Card from './Card';
import api from "../api/api";
import Button from './Button';
import CartIcon from './CartIcon';


function ComicList(){


  const [state,SetState] = useState([]);
  const [slice,setSlice] = useState([]);
  const [position,setPositon] = useState({firstPosition:0,
  lastPosition:10})
  // const [firstPosition,setFirst] = useState(0);
  // const [lastPosition,setLast] = useState(10);

  useEffect(()=>{
    const getComic =async()=>{

      const {data} = await api.getComics();
      SetState(data.data.results);
      
    }

    getComic();
  },[])


  useEffect(()=>{

    console.log(position.firstPosition);
    const spliceP = state.slice(position.firstPosition , position.lastPosition)
    console.log(spliceP);
    
    setSlice(spliceP);
    
  },[state,position])


  


  return( 
    <>
    
        <CartIcon/>
     {state.length===0?<h2>Carregando...</h2>:null}
    <InnerContainer>
      
      {
      slice.map((item,index)=>(
        
        <Card key={index} url={item.thumbnail} item={item}/>
      ))}
    </InnerContainer>
        <Button position={position} setPosition={setPositon}/>
  </>);
}

export default ComicList;
