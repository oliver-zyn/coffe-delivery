import { ShoppingCartContainer } from './styles'

import { CartItem } from '../CartItem'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCart'
import { formatNumberToReal } from '../../../../utils/formatNumberToReal'
import { FormCheckoutContext } from '../../../../contexts/FormCheckout'

export function ShoppingCart() {
  const navigate = useNavigate()

  const { shoppingCart, updateQuantityCart } = useContext(ShoppingCartContext)
  const { formCheckout, isFormCheckoutValid } = useContext(FormCheckoutContext)

  function handleConfirmDelivery() {
    console.log(formCheckout)

    if (!isFormCheckoutValid()) {
      alert('Preencha todos os campos!')
    } else {
      navigate('/success')
    }
  }

  function handleUpdateQuantityCart(id: string, currentQuantity: number) {
    updateQuantityCart(id, currentQuantity)
  }

  function calculateFreight() {
    const freight = shoppingCart.reduce((acc, { quantity }) => {
      return acc + quantity
    }, 0)

    return freight + shoppingCart.length
  }

  function calculatePriceItems(freight = 0) {
    const price = shoppingCart.reduce((acc, { price, quantity }) => {
      return acc + price * quantity + freight
    }, 0)

    return price
  }

  return (
    <ShoppingCartContainer>
      <h2>Cafés selecionados</h2>

      <section>
        <div>
          {shoppingCart.length === 0 ? (
            <div className="noItemsInCart">
              Você ainda não adicionou nenhum item ao carrinho
            </div>
          ) : (
            shoppingCart.map(({ id, imgUrl, title, price, quantity }) => {
              return (
                <CartItem
                  key={id}
                  id={id}
                  imgUrl={imgUrl}
                  title={title}
                  price={price}
                  quantity={quantity}
                  handleUpdateQuantityCart={handleUpdateQuantityCart}
                />
              )
            })
          )}
        </div>

        <div className="totalPrice">
          <div>
            <span>Total de itens</span>
            <span>R$ {formatNumberToReal(calculatePriceItems())}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ {formatNumberToReal(calculateFreight())}</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>
              R$ {formatNumberToReal(calculatePriceItems(calculateFreight()))}
            </span>
          </div>

          <button
            onClick={handleConfirmDelivery}
            disabled={shoppingCart.length === 0}
          >
            Confirmar pedido
          </button>
        </div>
      </section>
    </ShoppingCartContainer>
  )
}
