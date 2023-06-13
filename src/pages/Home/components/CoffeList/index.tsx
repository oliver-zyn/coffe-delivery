import { CoffeCard } from '../CoffeCard'
import { CoffeListContainer } from './styles'

import imgExpresso from '../../../../assets/expresso.svg'

const coffeList = [
  {
    id: crypto.randomUUID(),
    imgUrl: imgExpresso,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
]

export function CoffeList() {
  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>

      <div>
        {coffeList.map(({ id, imgUrl, tags, title, description, price }) => {
          return (
            <CoffeCard
              key={id}
              id={id}
              imgUrl={imgUrl}
              tags={tags}
              title={title}
              description={description}
              price={price}
            />
          )
        })}
      </div>
    </CoffeListContainer>
  )
}
