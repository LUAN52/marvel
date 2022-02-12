import { createGlobalStyle } from "styled-components";
import background from './images/MarvelBT.png'


export const GlobalStyle = createGlobalStyle`

    html,body,#root{

        min-height:100vh;
        /* background-color:#D8D8D8; */
            
    }

    #root{

        background-image:url(${background}) ;
        
    }
   


`