import { HeaderContainer, Locale, ShoppingCartStyle } from './styles'

import logoCoffe from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="" />

      <div>
        <Locale>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Locale>

        <ShoppingCartStyle cartquantity={3}>
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartStyle>
      </div>
    </HeaderContainer>
  )
}
