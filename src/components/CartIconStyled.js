import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartIconContainer = styled(Link)`

       font-size:1.2rem;
       margin-right:5px;
       width: 40px;
       height: 40px;
       display: flex;
       align-items:center;
       justify-content:center;
       position:absolute;
      
       text-decoration:none;
       b{
         font-size:0.7rem;
         color:white;
         margin-bottom:2px;
         margin-left:6px;
       }
     
`
export const CartContainer = styled.section`

    min-width: 100%;
    display:flex;  
    box-sizing: border-box;
    border-bottom:1px solid black;
    font-size:1.8rem;
    height: 50px;
    color:black;
    align-items:center;
    margin-bottom:100px;
    
  }
   

    
   

`


