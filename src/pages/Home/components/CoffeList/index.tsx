import { CoffeCard } from '../CoffeCard'
import { CoffeListContainer } from './styles'

export function CoffeList() {
  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeCard />
    </CoffeListContainer>
  )
}
