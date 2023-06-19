import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItemContainer } from './styles'
import { useContext, useState } from 'react'
import { formatNumberToReal } from '../../../../utils/formatNumberToReal'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCart'

interface CartItemProps {
  id: string
  imgUrl: string
  title: string
  price: number
  quantity: number
  handleUpdateQuantityCart: (id: string, quantityState: number) => void
}

export function CartItem({
  id,
  imgUrl,
  title,
  price,
  quantity,
  handleUpdateQuantityCart,
}: CartItemProps) {
  const [quantityState, setQuantityState] = useState(quantity)
  const { removeCoffeFromCart } = useContext(ShoppingCartContext)

  return (
    <CartItemContainer>
      <img src={imgUrl} alt={title} />

      <div>
        <p>{title}</p>

        <div>
          <span
            className="sub"
            onClick={() => {
              setQuantityState((state) => {
                if (state > 1) {
                  handleUpdateQuantityCart(id, state - 1)
                  return state - 1
                }
                handleUpdateQuantityCart(id, state)
                return state
              })
            }}
          >
            <Minus size={14} weight="bold" />
          </span>
          <input
            type="number"
            placeholder="0"
            value={quantityState}
            onChange={(e) => {
              const value = Number(e.target.value)
              if (value >= 1 && value <= 99) {
                handleUpdateQuantityCart(id, value)
                setQuantityState(value)
              }
            }}
          />
          <span
            className="add"
            onClick={() => {
              setQuantityState((state) => {
                if (state < 99) {
                  handleUpdateQuantityCart(id, state + 1)
                  return state + 1
                }
                handleUpdateQuantityCart(id, state)
                return state
              })
            }}
          >
            <Plus size={14} weight="bold" />
          </span>
        </div>

        <button onClick={() => removeCoffeFromCart(id)}>
          <Trash size={16} />
          Remover
        </button>
      </div>

      <span>R$ {formatNumberToReal(price)}</span>
    </CartItemContainer>
  )
}
