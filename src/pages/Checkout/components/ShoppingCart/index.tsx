import { ShoppingCartContainer } from './styles'

import imgExpresso from '../../../../assets/expresso.svg'
import imgAmericano from '../../../../assets/americano.svg'
import { CartItem } from '../CartItem'
import { useNavigate } from 'react-router-dom'

const coffeList = [
  {
    id: crypto.randomUUID(),
    imgUrl: imgExpresso,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    id: crypto.randomUUID(),
    imgUrl: imgAmericano,
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
]

export function ShoppingCart() {
  const navigate = useNavigate()

  function handleConfirmDelivery() {
    navigate('/success')
  }

  return (
    <ShoppingCartContainer>
      <h2>Cafés selecionados</h2>

      <section>
        <div>
          {coffeList.map(({ id, imgUrl, title, price }) => {
            return (
              <CartItem
                key={id}
                id={id}
                imgUrl={imgUrl}
                title={title}
                price={price}
              />
            )
          })}
        </div>

        <div className="totalPrice">
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>

          <button onClick={handleConfirmDelivery}>Confirmar pedido</button>
        </div>
      </section>
    </ShoppingCartContainer>
  )
}
