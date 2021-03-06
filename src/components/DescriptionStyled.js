import styled from "styled-components";
export const DescContainer = styled.div`

    max-width: 100%;
    height:37.5%;
    background-color:red;
    display: flex;
    align-items:center;
    justify-content:center;
    border-bottom:2px;
    padding:2px;
    overflow:scroll;

    ::-webkit-scrollbar {
    width: 0;  
    background: transparent;  
    }

    p{
        margin:0;
        font-size:0.8rem;
        word-wrap:break-word;
        margin-bottom:2px;
        margin-left:10px;
    }

    div{
        display:flex;
        flex-direction:column;
        color:white;
        font-weight:500;
        margin-top:20px;
        

        
        width:100%;

        div{

            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
       
   
    }
  

`


export const PurchaseButton = styled.button`

    width: 80%;
    border-radius:5px;
    background-color:#318ce7;
    color:white;

`
        
