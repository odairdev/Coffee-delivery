import {
  BaseInput,
  CartSummary,
  CheckoutContainer,
  DeliveryForm,
  FormLabel,
  FullInput,
  PaymentForm,
  PaymentMethodButton,
  SelectedCoffees,
  SmallInput,
  SubmitOrderButton,
} from "./styles";
import { CurrencyDollar, MapPinLine, CreditCard, Bank, Money } from "phosphor-react";
import { SelectedCoffee } from "../../components/SelectedCoffee";

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
        <SelectedCoffees>
          <SelectedCoffee />
          <SelectedCoffee />
          <CartSummary>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
            <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
          </CartSummary>
          <SubmitOrderButton>CONFIRMAR PEDIDO</SubmitOrderButton>
        </SelectedCoffees>
      </section>
    </CheckoutContainer>
  );
}
