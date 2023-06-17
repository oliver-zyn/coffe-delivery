import { ReactNode, createContext, useState } from 'react'

interface ShoppingCartType {
  id: string
  imgUrl: string
  tags: string[]
  title: string
  description: string
  price: string
  quantity: number
}

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

interface ShoppingCartContextType {
  shoppingCart: ShoppingCartType[]
  addCoffeToCart: (coffe: ShoppingCartType) => void
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

    console.log(shoppingCart)
  }

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, addCoffeToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
