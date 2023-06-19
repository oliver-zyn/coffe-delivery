import { HeaderContainer, Locale, ShoppingCartStyle } from './styles'

import logoCoffe from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCart'

export function Header() {
  const { shoppingCart } = useContext(ShoppingCartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffe} alt="" />
      </NavLink>

      <div>
        <Locale>
          <MapPin size={22} weight="fill" />
          Pato Branco, PR
        </Locale>

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCartStyle cartquantity={shoppingCart.length}>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartStyle>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
