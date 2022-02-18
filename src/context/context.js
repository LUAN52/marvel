import {createContext,useState,useContext} from "react";


const Context = createContext();


export default function Provider({children}){

    const [cart,setCart] = useState([]);
    const [ clickButton,setClickButton] = useState(false)

    return <Context.Provider value={{cart,setCart,clickButton,setClickButton}}>
        {children}
    </Context.Provider>
    
}


export function useData(){
    const context = useContext(Context);

    const {cart,setCart,
    clickButton,setClickButton} = context;


    return {cart,setCart,clickButton,setClickButton}
}


