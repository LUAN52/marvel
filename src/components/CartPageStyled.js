import styled from "styled-components";






export const InnerContainer = styled.div`
    width: 90%;
    height:80px;
    border:2px solid black;
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
    width: 80%;
    min-height: 800px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:2px solid black;
    justify-content:center;
    margin-top:50px;


    h1{
         color:white;
         background-color:red;
         font-weight:500;
         border-radius:2px;
         text-align:center;
         min-width:15%
       }

 


`

export const TotalContainer = styled.footer`

    min-width:35%;
    background-color:red;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:auto;
    height: 150px;
    border:2px solid pink;
    align-self:end;

`