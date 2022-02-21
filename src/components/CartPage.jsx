import React, { useEffect, useState } from 'react'
import { CartContainer, InnerContainer, DeleteItem, ImageContainer, PriceContainer, TotalContainer } from './CartPageStyled';
import { useData } from '../context/context';
import { EmptyCart } from './EmptyCart';
import PurchaseButton from './PurchaseButton';

export const CartPage = () => {


    

    const [deleteB,setDeleteB] = useState(false)
    const {cart,setCart} = useData();
    const [total,setTotal] = useState(0);
    
    useEffect(()=>{

       setDeleteB(false);
       const tot = cart.reduce((acc,item)=>{
            return acc + item.prices[0].price
       },0)

       setTotal(tot)
        
    },[deleteB,cart])

   

    
    return (
       <> <CartContainer> 
            {cart.length > 0 ? cart.map((item, index) =>
                <InnerContainer key={index}>
                    <ImageContainer><img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="imagem compra" /></ImageContainer>
                    <PriceContainer><b>{`R$:${item.prices[0].price}`}</b></PriceContainer>
                    <DeleteItem onClick={()=>{
                        setCart(cart.filter(obj=>obj.id!==item.id))
                        setDeleteB(true)      
                    }}>
                        <b>-</b>
                    </DeleteItem>
                </InnerContainer>         
            ) :<EmptyCart/>
            }
        </CartContainer>
        <TotalContainer>
        <b>total:  {`R$${Math.round(total)}`}</b>
        {cart.length>0?  <PurchaseButton/>:null}
       
         
         </TotalContainer></>

    )


}