import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  AdressIcon,
  MoneyIcon,
  SuccessContainer,
  TextInfo,
  TimeIcon,
} from './styles'

import successImage from '../../assets/successImage.png'

export function Success() {
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </p>
          </TextInfo>
        </span>
      </div>

      <img src={successImage} alt="homem em uma moto de entrega" />
    </SuccessContainer>
  )
}
