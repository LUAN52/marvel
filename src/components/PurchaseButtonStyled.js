import styled from "styled-components";



export const PurchaseContainer = styled.div`

    display : flex;
    width:100%;
    justify-content:space-between;
    align-self:end;
    grid-column:1/4;
    grid-rows:3/4;

`

export const PurButton = styled.button`
    background-color:${props=>props.color};
    color:white;
    text-align:center;
    font-weight:800;
    cursor:pointer;
    border-radius:5px;
    width:40%;
    
`