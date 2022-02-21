import styled from "styled-components";

export const InnerContainer = styled.div`
    width: 90%;
    height:80px;
    border:2px solid none;
    box-sizing:border-box;
    margin-top:5px;
    margin-bottom:1px;
    display:flex;
    justify-content:space-between;
    position:relative;
    background-color:blue;

`


export const DeleteItem = styled.button`
    width:10px;
    height:10px;
    background-color:red;
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:white;
    right:0;
    top:0;
    cursor:pointer;

    b{
        margin-bottom:3px
    }
`


export const ImageContainer = styled.div`
    width:65px;
    height: 100%;
   

    img{
        width: 100%;
        height: 100%;
    }

`

export const PriceContainer=styled.div`

    width:65px;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
   

    b{
        font-size:1rem;
    }
`

    
export const CartContainer = styled.section`
    width:80%;
    min-height: 240px;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    border:2px solid none;
    margin-top:50px;
    margin-bottom:20px;

    h1{
         color:white;
         background-color:red;
         font-weight:400;
         border-radius:2px;
         text-align:center;
         min-width:15%
         font-size:0.5rem;
       }

`

export const TotalContainer = styled.footer`
    width:90%;
    background-color:red;
    display:grid;
    grid-columns:1fr 1fr;
    grid-rows:0.5fr 1fr; 
    margin-top:auto;
    height: 100px;
    border:2px solid pink;
    align-self:center;

    b{
        grid-rows:1/2;
        grid-column:1/4; 
        text-align:center;
        align-self:center;       
    }
   

    @media only screen and (min-width:520px){
       width:40%;
       align-self:end;
    }

`

    

