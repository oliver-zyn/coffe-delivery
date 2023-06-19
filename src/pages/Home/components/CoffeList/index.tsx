import { CoffeCard } from '../CoffeCard'
import { CoffeListContainer } from './styles'

import imgExpresso from '../../../../assets/expresso.svg'
import imgAmericano from '../../../../assets/americano.svg'
import imgCremoso from '../../../../assets/expressoCremoso.svg'
import imgGelado from '../../../../assets/cafeGelado.svg'
import imgComLeite from '../../../../assets/cafeComLeite.svg'
import imgLatte from '../../../../assets/latte.svg'
import imgCapuccino from '../../../../assets/capuccino.svg'
import imgMacchiato from '../../../../assets/macchiato.svg'
import imgMochaccino from '../../../../assets/mochaccino.svg'
import imgChocolateQuente from '../../../../assets/chocolateQuente.svg'
import imgCubano from '../../../../assets/cubano.svg'
import imgHavaiano from '../../../../assets/havaiano.svg'
import imgArabe from '../../../../assets/arabe.svg'
import imgIrlandes from '../../../../assets/irlandes.svg'

const coffeList = [
  {
    id: crypto.randomUUID(),
    imgUrl: imgExpresso,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgAmericano,
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgCremoso,
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgGelado,
    tags: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgComLeite,
    tags: ['Tradicional', 'Com leite'],
    title: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgLatte,
    tags: ['Tradicional', 'Com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgCapuccino,
    tags: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgMacchiato,
    tags: ['Tradicional', 'Com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgMochaccino,
    tags: ['Tradicional', 'Com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgChocolateQuente,
    tags: ['Especial', 'Com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgCubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgHavaiano,
    tags: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgArabe,
    tags: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgIrlandes,
    tags: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
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
