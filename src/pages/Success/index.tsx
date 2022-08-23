import { DeliveryInfo, RoundIcon, SuccessContainer } from "./styles";
import { Timer, MapPin, CurrencyDollar } from "phosphor-react";

import successImg from "../../assets/success.svg";

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhul! Pedido Confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <div className="border-wrapper">
        <DeliveryInfo>
          <div>
            <RoundIcon color="purple">
              <MapPin size={16} weight="fill" />
            </RoundIcon>
            <div>
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  <br />
                  Farrapos - Porto Alegre, RS
                </p>
              </div>
            </div>
          </div>

          <div>
            <RoundIcon color="yellow">
              <Timer size={16} weight="fill" />
            </RoundIcon>
            <div>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
          </div>

          <div>
            <RoundIcon color="orange">
              <CurrencyDollar size={16} weight="fill" />
            </RoundIcon>
            <div>
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de credito</strong>
              </div>
            </div>
          </div>
        </DeliveryInfo>
        </div>
        <img src={successImg} />
      </div>
    </SuccessContainer>
  );
}
