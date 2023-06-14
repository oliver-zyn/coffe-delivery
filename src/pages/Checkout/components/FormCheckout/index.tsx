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

export function FormCheckout() {
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
          <input type="text" placeholder="CEP" id="cep" />

          <input type="text" placeholder="Rua" id="street" />

          <div className="adressFirst">
            <input type="text" placeholder="Número" id="num" />
            <input type="text" placeholder="Complemento" id="comp" />
            <span>Opcional</span>
          </div>

          <div className="adressSecond">
            <input type="text" placeholder="Bairro" id="district" />
            <input type="text" placeholder="Cidade" id="city" />
            <input type="text" placeholder="UF" id="uf" maxLength={2} />
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
            <RadioBox>
              <CreditCard size={16} />
              Cartão de crédito
            </RadioBox>

            <RadioBox>
              <Bank size={16} />
              Cartão de débito
            </RadioBox>

            <RadioBox>
              <Money size={16} />
              Dinheiro
            </RadioBox>
          </div>
        </PaymentBody>
      </section>
    </FormCheckoutContainer>
  )
}
