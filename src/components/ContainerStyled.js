import styled from "styled-components";


export const ContainerList =styled.div`

    width:100%;
    min-height:800px;
    border:2px solid orange;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    
`


export const Button = styled.div`
    align-self:center;
    width:50%;
    border:2px solid green;
    height: 20px;
    margin-top:auto;
    

`


export const InnerContainer = styled.div`

    display:grid;
    grid-template-columns:repeat(5,1fr);
    width:80%;
    min-height:555px;
    border:2px solid black;
    gap:5px;
`