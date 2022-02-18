import styled from "styled-components";
import { Link } from "react-router-dom";




export const EmptyContainer = styled.div`
    
    width:60%
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    padding:5px;
    background-color:	#2934cc
;

    div{
       
        border:2px solid black;
        display: flex;
        justify-content:center;
    }

`



export const ReturButton = styled(Link)`

    width:40%;
    background-color:red;
    color:white;
    border:2px solid none;
    border-radius:5px;
    text-decoration:none;
    text-align:center;
    

`