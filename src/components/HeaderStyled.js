import styled from "styled-components";

import Font from "../fonts/Bebas.ttf";


export const HeaderC = styled.header`

    display: flex;
    width:100%;
    height: 150px;
    align-items:center;
    justify-content:center;
    font-size:2rem;
    background-color: #ED1D24;

    @font-face{
        font-family: Bebas;
        src:url(${Font});
    }
    H1{
        color:White;
        font-size:5rem;
        font-family:"Bebas"
    }

`