import {
  BaseInput,
  CheckoutContainer,
  DeliveryForm,
  FormLabel,
  FullInput,
  PaymentForm,
  PaymentMethodButton,
  SelectedCoffees,
  SmallInput,
} from "./styles";
import { CurrencyDollar, MapPinLine, CreditCard, Bank, Money } from "phosphor-react";

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>
        <div className="delivery-payment">
          <DeliveryForm>
            <FormLabel>
              <div>
                <MapPinLine size={22} />
                <h3>Endereço de entrega</h3>
              </div>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </FormLabel>
            <BaseInput placeholder="CEP" />
            <FullInput placeholder="Rua" />
            <div>
              <BaseInput placeholder="Número" />
              <FullInput placeholder="Complemento" />
            </div>
            <div>
              <BaseInput placeholder="Bairro" />
              <FullInput placeholder="Cidade" />
              <SmallInput placeholder="UF" />
            </div>
          </DeliveryForm>
          <PaymentForm>
            <FormLabel>
              <div>
                <CurrencyDollar size={22} />
                <h3>Pagamento</h3>
              </div>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </FormLabel>
            <div>
              <PaymentMethodButton selected={true}>
                <CreditCard size={22} />
                Cartão de Credito
              </PaymentMethodButton>
              <PaymentMethodButton>
                <Bank size={22} />
                Cartão de Débito
              </PaymentMethodButton>
              <PaymentMethodButton>
                <Money size={22} />
                Dinheiro
              </PaymentMethodButton>
            </div>
          </PaymentForm>
        </div>
      </section>
      <section>
        <h2>Cafés selecionados</h2>
        <SelectedCoffees />
      </section>
    </CheckoutContainer>
  );
}
