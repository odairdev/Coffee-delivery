import { CoffeeCard } from "../../../components/CoffeeCard";
import { GridContainer } from "./styles";


export function CardGrid() {
  return (
    <GridContainer>
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
    </GridContainer>
  )
}