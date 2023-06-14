import { HeaderContainer, Locale, ShoppingCartStyle } from './styles'

import logoCoffe from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffe} alt="" />
      </NavLink>

      <div>
        <Locale>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Locale>

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCartStyle cartquantity={3}>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartStyle>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
