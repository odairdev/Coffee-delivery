import { useNavigate } from "react-router-dom";
import { HeaderContainer, UserInfo, UserLocation } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

import Logo from '../../assets/Logo.svg'

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffee Delivery Logo" onClick={() => navigate('/')} />
      <UserInfo>
        <UserLocation>
          <MapPin size={24} weight={"fill"}/>
          Porto Alegre, RS
        </UserLocation>
        <div className="cart">
          <ShoppingCart size={24} weight="fill" onClick={() => {navigate('/checkout')}} />
        </div>
      </UserInfo>
    </HeaderContainer>
  )
}