import { styled } from 'styled-components'

interface ShoppingCartStyleProps {
  cartquantity: number
}

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  > a {
    border-radius: 6px;
  }

  > a:focus {
    box-shadow: none;
    outline: none;
  }
`

export const Locale = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  font-size: ${(props) => props.theme['text-s']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ShoppingCartStyle = styled.button<ShoppingCartStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  border: 0;
  border-radius: 6px;
  position: relative;

  cursor: pointer;

  &::before {
    content: '${(props) => props.cartquantity}';
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-dark']};
    font-size: ${(props) => props.theme['text-s']};
    font-weight: 700;
    position: absolute;
    top: -8px;
    right: -8px;
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
