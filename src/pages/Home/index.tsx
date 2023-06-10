import {
  HomeContainer,
  AdvantageList,
  CartIcon,
  PackageIcon,
  TimerIcon,
  CoffeeIcon,
} from './styles'

import homeimage from '../../assets/homeImage.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <AdvantageList>
          <li>
            <CartIcon>
              <ShoppingCart size={16} weight="fill" />
            </CartIcon>
            Compra simples e segura
          </li>
          <li>
            <PackageIcon>
              <Package size={16} weight="fill" />
            </PackageIcon>
            Embalagem mantém o café intacto
          </li>
          <li>
            <TimerIcon>
              <Timer size={16} weight="fill" />
            </TimerIcon>
            Entrega rápida e rastreada
          </li>
          <li>
            <CoffeeIcon>
              <Coffee size={16} weight="fill" />
            </CoffeeIcon>
            O café chega fresquinho até você
          </li>
        </AdvantageList>
      </div>

      <img src={homeimage} alt="copo de café com fundo em amarelo" />
    </HomeContainer>
  )
}
