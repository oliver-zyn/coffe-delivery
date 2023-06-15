import { FormCheckout } from './components/FormCheckout'
import { CheckoutContainer } from './styles'
import { ShoppingCart } from './components/ShoppingCart'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormCheckout />

      <ShoppingCart />
    </CheckoutContainer>
  )
}
