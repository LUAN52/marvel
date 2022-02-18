import { createGlobalStyle } from "styled-components";
import background from './images/MarvelBT.png'


export const GlobalStyle = createGlobalStyle`

    html,body,#root{

        min-height:100vh;
        margin:0;
        padding:0;
        /* background-color:#D8D8D8; */
      
            
    }

    #root{

        background-image:url(${background}) ;
       
    }
   


`