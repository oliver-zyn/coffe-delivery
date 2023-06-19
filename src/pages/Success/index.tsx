import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  AdressIcon,
  MoneyIcon,
  SuccessContainer,
  TextInfo,
  TimeIcon,
} from './styles'

import successImage from '../../assets/successImage.png'
import { useContext } from 'react'
import { FormCheckoutContext } from '../../contexts/FormCheckout'

export function Success() {
  const { formCheckout } = useContext(FormCheckoutContext)

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <span>
          <AdressIcon>
            <MapPin size={16} weight="fill" />
          </AdressIcon>
          <TextInfo>
            <p>
              Entrega em{' '}
              <strong>
                {formCheckout.street}, {formCheckout.num}
              </strong>
            </p>
            <p>
              {formCheckout.district} - {formCheckout.city}, {formCheckout.uf}
            </p>
          </TextInfo>
        </span>
        <span>
          <TimeIcon>
            <Timer size={16} weight="fill" />
          </TimeIcon>
          <TextInfo>
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min </strong>
            </p>
          </TextInfo>
        </span>
        <span>
          <MoneyIcon>
            <CurrencyDollar size={16} weight="fill" />
          </MoneyIcon>
          <TextInfo>
            <p>Pagamento na entrega</p>
            <p>
              <strong>{formCheckout.payment}</strong>
            </p>
          </TextInfo>
        </span>
      </div>

      <img src={successImage} alt="homem em uma moto de entrega" />
    </SuccessContainer>
  )
}
