import { Trash } from 'phosphor-react'
import Expresso from '../../assets/Expresso.svg'
import { RemoveButton, SelectedCoffeeContainer, SelectedCoffeeInfo } from './styles'

export function SelectedCoffee() {
  return (
    <SelectedCoffeeContainer>
      <img src={Expresso} alt="" />
      <SelectedCoffeeInfo>
        <p>Expresso tradicional</p>
        <div>
        <div className='coffee-amount'>
          <span>—</span>
          1
          <span> +</span>
        </div>
        <RemoveButton>
          <Trash size={16} />
          REMOVER
        </RemoveButton>
        </div>
      </SelectedCoffeeInfo>
      <span className="coffee-price">
          9,90
        </span>
    </SelectedCoffeeContainer>
  )
}