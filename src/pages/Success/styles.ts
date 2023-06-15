import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  display: grid;
  align-items: end;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'title title'
    'subtitle subtitle'
    'info image';
  margin-top: 5rem;

  h1 {
    grid-area: title;
    font-size: ${(props) => props.theme['title-l']};
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  > p {
    grid-area: subtitle;
    font-size: ${(props) => props.theme['text-l']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    grid-area: info;
    max-width: 33rem;
    margin: 2.5rem 6.375rem 0 0;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background: linear-gradient(white, white) padding-box,
      linear-gradient(
          to right,
          ${(props) => props.theme.yellow},
          ${(props) => props.theme.purple}
        )
        border-box;
    border-radius: 6px 36px;
    border: 2px solid transparent;

    > span {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }

  img {
    max-width: 30.75rem;
    grid-area: image;
  }

  @media (max-width: 1165px) {
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'subtitle'
      'info'
      'image';

    div {
      margin: 2.5rem auto 2.5rem;
    }
  }
`

export const TextInfo = styled.span`
  display: flex;
  flex-direction: column;

  p {
    line-height: 1.3;
  }
`

export const IconBullet = styled.span`
  grid-area: icon;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 9999px;

  color: ${(props) => props.theme.background};
`

export const AdressIcon = styled(IconBullet)`
  background: ${(props) => props.theme.purple};
`

export const TimeIcon = styled(IconBullet)`
  background: ${(props) => props.theme.yellow};
`
export const MoneyIcon = styled(IconBullet)`
  background: ${(props) => props.theme['yellow-dark']};
`
