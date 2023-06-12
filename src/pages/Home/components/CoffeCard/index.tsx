import {
  CardContainer,
  CoffeDescription,
  CoffeFooter,
  TagsContainer,
} from './styles'
import coffeImg from '../../../../assets/expresso.svg'
import { ShoppingCartSimple } from 'phosphor-react'

export function CoffeCard() {
  return (
    <CardContainer>
      <img src={coffeImg} alt="café expresso" />

      <TagsContainer>
        <span>Tradicional</span>
        <span>Gelado</span>
      </TagsContainer>

      <CoffeDescription>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeDescription>

      <CoffeFooter>
        <div>
          <span>R$</span>
          <h4>9,90</h4>
        </div>

        <div>
          <input type="number" />

          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </CoffeFooter>
    </CardContainer>
  )
}
