import React ,{createContext, useState,useContext} from 'react';


 const Context = createContext()


export default function Provider({children})
{
    
    const [cart, setCart] = useState([]);
    const [comic,setComic] = useState({})
    
    

    return <Context.Provider 
    value={{
    
        cart,setCart,
        comic,setComic
        
        

    }
    }> {children} </Context.Provider>
          
}

export function useData()
{
    const context = useContext(Context)

    const {cart,setCart,comic,setComic
       } = context;
           


    return {cart,setCart,comic,setComic};
        
    
}