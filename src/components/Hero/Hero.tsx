import { HeroContainer, HeroItems, HeroText, RoundIcon } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import HeroImg from "../../assets/Hero.svg";

export function Hero() {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div>
          <HeroItems>
            <RoundIcon color="orange">
              <ShoppingCart size={16} weight="fill" />
            </RoundIcon>
            <span>Compra simples e segura</span>
          </HeroItems>
          <HeroItems>
            <RoundIcon color="gray">
              <Package size={16} weight="fill" />
            </RoundIcon>
            <span>Embalagem mantém o café intacto</span>
          </HeroItems>
          <HeroItems>
            <RoundIcon color="yellow">
              <Timer size={16} weight="fill" />
            </RoundIcon>
            <span>Entrega rápida e rastreada</span>
          </HeroItems>
          <HeroItems>
            <RoundIcon color="purple">
              <Coffee size={16} weight="fill" />
            </RoundIcon>
            <span>O café chega fresquinho até você</span>
          </HeroItems>
        </div>
      </HeroText>
      <img src={HeroImg} alt="Coffee cup image" />
    </HeroContainer>
  );
}
