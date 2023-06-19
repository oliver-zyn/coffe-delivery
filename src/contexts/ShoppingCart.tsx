import { ReactNode, createContext, useState } from 'react'

interface ShoppingCartType {
  id: string
  imgUrl: string
  tags: string[]
  title: string
  description: string
  price: number
  quantity: number
}

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

interface ShoppingCartContextType {
  shoppingCart: ShoppingCartType[]
  addCoffeToCart: (coffe: ShoppingCartType) => void
  removeCoffeFromCart: (id: string) => void
  updateQuantityCart: (id: string, quantity: number) => void
  resetShoppingCart: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartType[]>([])

  function addCoffeToCart(coffe: ShoppingCartType) {
    const coffeExists = shoppingCart.find(
      (coffeCart) => coffeCart.id === coffe.id,
    )

    if (!coffeExists) {
      setShoppingCart((state) => [...state, coffe])
    } else {
      const newShoppingCart = shoppingCart.map((coffeCart) =>
        coffeCart.id === coffe.id
          ? { ...coffeCart, quantity: coffeCart.quantity + coffe.quantity }
          : coffeCart,
      )
      setShoppingCart(newShoppingCart)
    }
  }

  function removeCoffeFromCart(id: string) {
    const newShoppingCart = shoppingCart.filter(
      (coffeCart) => coffeCart.id !== id,
    )
    setShoppingCart(newShoppingCart)
  }

  function updateQuantityCart(id: string, quantity: number) {
    const newShoppingCart = shoppingCart.map((coffeCart) =>
      coffeCart.id === id ? { ...coffeCart, quantity } : coffeCart,
    )
    setShoppingCart(newShoppingCart)
  }

  function resetShoppingCart() {
    setShoppingCart([])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addCoffeToCart,
        removeCoffeFromCart,
        updateQuantityCart,
        resetShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
