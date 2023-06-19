import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  FormBody,
  FormCheckoutContainer,
  FormHeader,
  PaymentBody,
  PaymentHeader,
  RadioBox,
} from './styles'

import { ChangeEvent, useContext, useState } from 'react'
import { FormCheckoutContext } from '../../../../contexts/FormCheckout'

export function FormCheckout() {
  const { formCheckout, updateFormCheckout } = useContext(FormCheckoutContext)
  const [paymentType, setPaymentType] = useState(formCheckout.payment)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    updateFormCheckout(name, value)
  }

  function handleSelectPaymentType(currentPaymentType: string) {
    setPaymentType(currentPaymentType)

    updateFormCheckout('payment', currentPaymentType)
  }

  return (
    <FormCheckoutContainer>
      <h2>Complete seu pedido</h2>

      <form>
        <FormHeader>
          <MapPinLine size={22} />

          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FormHeader>

        <FormBody>
          <input
            type="text"
            placeholder="CEP"
            id="cep"
            name="cep"
            onChange={handleInputChange}
            value={formCheckout.cep}
          />

          <input
            type="text"
            placeholder="Rua"
            id="street"
            name="street"
            onChange={handleInputChange}
            value={formCheckout.street}
          />

          <div className="adressFirst">
            <input
              type="number"
              placeholder="Número"
              id="num"
              name="num"
              onChange={handleInputChange}
              value={formCheckout.num}
            />
            <input
              type="text"
              placeholder="Complemento"
              id="comp"
              name="comp"
              onChange={handleInputChange}
              value={formCheckout.comp}
            />
            <span>Opcional</span>
          </div>

          <div className="adressSecond">
            <input
              type="text"
              placeholder="Bairro"
              id="district"
              name="district"
              onChange={handleInputChange}
              value={formCheckout.district}
            />
            <input
              type="text"
              placeholder="Cidade"
              id="city"
              name="city"
              onChange={handleInputChange}
              value={formCheckout.city}
            />
            <input
              type="text"
              placeholder="UF"
              id="uf"
              name="uf"
              maxLength={2}
              onChange={handleInputChange}
              value={formCheckout.uf}
            />
          </div>
        </FormBody>
      </form>

      <section>
        <PaymentHeader>
          <CurrencyDollar size={22} />

          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </PaymentHeader>

        <PaymentBody>
          <div>
            <RadioBox
              $isActive={paymentType === 'credit'}
              onClick={() => handleSelectPaymentType('credit')}
            >
              <CreditCard size={16} />
              Cartão de crédito
            </RadioBox>

            <RadioBox
              $isActive={paymentType === 'debt'}
              onClick={() => handleSelectPaymentType('debt')}
            >
              <Bank size={16} />
              Cartão de débito
            </RadioBox>

            <RadioBox
              $isActive={paymentType === 'money'}
              onClick={() => handleSelectPaymentType('money')}
            >
              <Money size={16} />
              Dinheiro
            </RadioBox>
          </div>
        </PaymentBody>
      </section>
    </FormCheckoutContainer>
  )
}
