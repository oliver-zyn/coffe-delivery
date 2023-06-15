import {
  CardContainer,
  CoffeDescription,
  CoffeFooter,
  TagsContainer,
} from './styles'

import { ShoppingCartSimple } from 'phosphor-react'

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
          <input type="number" min={0} max={100} placeholder="0" />

          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </CoffeFooter>
    </CardContainer>
  )
}
