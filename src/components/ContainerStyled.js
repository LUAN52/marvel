import styled from "styled-components";


export const ContainerList =styled.div`

    width:100%;
    min-height:900px;
    border:2px solid orange;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-sizing: border-box;
    margin-top:150px;
    
`
export const InnerContainer = styled.div`

    display:grid;
    grid-template-columns:repeat(1,1fr);
    max-width:1050px;
    width:90%;
    min-height:555px;
    border:2px solid none;
    gap:15px;
    margin-top:10px;
    padding-top:10px;
    margin-bottom:40px;


    @media only screen and (min-width:684px) and (max-width:1060px){
        grid-template-columns:repeat(2,1fr);
        max-width:550px;
    }

    @media only screen  and (min-width:1070px) {

        grid-template-columns:repeat(5,1fr);
        

    }




`