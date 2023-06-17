import { useContext, useState } from 'react'
import {
  CardContainer,
  CoffeDescription,
  CoffeFooter,
  TagsContainer,
} from './styles'

import { ShoppingCartSimple } from 'phosphor-react'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCart'

interface CoffeCardProps {
  id: string
  imgUrl: string
  tags: string[]
  title: string
  description: string
  price: string
}

export function CoffeCard({
  id,
  imgUrl,
  tags,
  title,
  description,
  price,
}: CoffeCardProps) {
  const { addCoffeToCart } = useContext(ShoppingCartContext)

  const [quantity, setQuantity] = useState(0)

  function handleAddCoffeToCart() {
    if (quantity <= 0) {
      alert('A quantidade deve ser maior que 0!')
    } else {
      addCoffeToCart({ id, imgUrl, tags, title, description, price, quantity })
    }
  }

  return (
    <CardContainer>
      <img src={imgUrl} alt={title} />

      <TagsContainer>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagsContainer>

      <CoffeDescription>
        <h3>{title}</h3>
        <p>{description}</p>
      </CoffeDescription>

      <CoffeFooter>
        <div>
          <span>R$</span>
          <h4>{price}</h4>
        </div>

        <div>
          <input
            type="number"
            min={1}
            max={100}
            placeholder="0"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <button type="submit" onClick={handleAddCoffeToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </CoffeFooter>
    </CardContainer>
  )
}
