import { Trash } from 'phosphor-react'
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
  const [quantityState, setQuantity] = useState(quantity)
  const { removeCoffeFromCart } = useContext(ShoppingCartContext)

  return (
    <CartItemContainer>
      <img src={imgUrl} alt={title} />

      <div>
        <p>{title}</p>

        <input
          type="number"
          placeholder="0"
          value={quantityState}
          onChange={(e) => {
            const value = Number(e.target.value)
            if (value >= 1 && value <= 100) {
              handleUpdateQuantityCart(id, value)
              setQuantity(value)
            }
          }}
        />

        <button onClick={() => removeCoffeFromCart(id)}>
          <Trash size={16} />
          Remover
        </button>
      </div>

      <span>R$ {formatNumberToReal(price)}</span>
    </CartItemContainer>
  )
}
