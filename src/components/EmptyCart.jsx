import React from 'react'
import { EmptyContainer, ReturButton } from './EmptyCartStyled'

export const EmptyCart = () => {
    return (
        <EmptyContainer>
            <h2>seu carrinho esta vazio</h2>
            <div><ReturButton to="/marvel">Voltar</ReturButton></div>     
        </EmptyContainer>
    )
}