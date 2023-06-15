import { Trash } from 'phosphor-react'
import { CartItemContainer } from './styles'

interface CartItemProps {
  id: string
  imgUrl: string
  title: string
  price: string
}

export function CartItem({ id, imgUrl, title, price }: CartItemProps) {
  return (
    <CartItemContainer>
      <img src={imgUrl} alt={title} />

      <div>
        <p>{title}</p>

        <input type="number" min={0} max={100} placeholder="0" />

        <button>
          <Trash size={16} />
          Remover
        </button>
      </div>

      <span>R$ {price}</span>
    </CartItemContainer>
  )
}
