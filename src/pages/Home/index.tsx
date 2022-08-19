import { Hero } from "../../components/Hero/Hero";
import { CardGrid } from "./CardGrid";
import { HomeContainer } from "./styles";


export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <h2>Nossos Cafés</h2>
      <CardGrid />
    </HomeContainer>
  )
}