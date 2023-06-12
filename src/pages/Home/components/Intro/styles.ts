import { styled } from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5.875rem;
  gap: 3.5rem;

  h1 {
    font-size: ${(props) => props.theme['title-xl']};
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: ${(props) => props.theme['text-l']};
    line-height: 1.3;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1,
    p {
      text-align: center;
    }

    img {
      width: 400px;
    }
  }
`

export const AdvantageList = styled.ul`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1.25rem 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    list-style: none;
    font-size: ${(props) => props.theme['text-m']};
  }

  @media (max-width: 1040px) {
    justify-items: center;
  }
`

export const IconBullet = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 9999px;

  color: ${(props) => props.theme.background};
`

export const CartIcon = styled(IconBullet)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const PackageIcon = styled(IconBullet)`
  background: ${(props) => props.theme['base-text']};
`

export const TimerIcon = styled(IconBullet)`
  background: ${(props) => props.theme.yellow};
`

export const CoffeeIcon = styled(IconBullet)`
  background: ${(props) => props.theme.purple};
`
