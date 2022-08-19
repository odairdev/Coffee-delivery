import { AddToCartButton, CardContainer, CardFeatures, CoffeeLabel } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'

import expresso from '../../assets/Expresso.svg'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={expresso} alt="Café " />
      <CoffeeLabel>Tradicional</CoffeeLabel>
      <p>Expresso Tradicional</p>
      <span className='coffee-description'>O tradicional café feito com água quente e grãos moídos</span>
      <CardFeatures>
        <span className="coffee-price">
          9,90
        </span>
        <div className='coffee-amount'>
          <span>—</span>
          1
          <span> +</span>
        </div>
        <AddToCartButton>
          <ShoppingCartSimple size={22} weight="fill" />
        </AddToCartButton>
      </CardFeatures>
    </CardContainer>
  )
}