import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmptyContainer = styled.div`
    
    width:70%;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    padding:5px;
    background-color:#2934cc;
    border:2px solid black;

    h2{
        font-size:max(0.8rem,2vw);
    }
       
    div{
        display: flex;
        justify-content:center;
        width:60%;
    }

`

export const ReturButton = styled(Link) `
    width:100px;
    background-color:red;
    color:white;
    border:2px solid none;
    border-radius:5px;
    text-decoration:none;
    text-align:center;   

`