import {
  BaseInput,
  CheckoutContainer,
  DeliveryForm,
  FormLabel,
  FullInput,
  SelectedCoffees,
  SmallInput,
} from "./styles";
import { MapPin, MapPinLine } from "phosphor-react";

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
        </div>
      </section>
      <section>
        <h2>Cafés selecionados</h2>
        <SelectedCoffees />
      </section>
    </CheckoutContainer>
  );
}
