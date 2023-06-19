import { useContext, useState } from 'react'
import {
  CardContainer,
  CoffeDescription,
  CoffeFooter,
  TagsContainer,
} from './styles'

import { ShoppingCartSimple, Check, Plus, Minus } from 'phosphor-react'
import { ShoppingCartContext } from '../../../../contexts/ShoppingCart'
import { formatNumberToReal } from '../../../../utils/formatNumberToReal'

import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

interface CoffeCardProps {
  id: string
  imgUrl: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeCard({
  id,
  imgUrl,
  tags,
  title,
  description,
  price,
}: CoffeCardProps) {
  const { addCoffeToCart } = useContext(ShoppingCartContext)

  const [quantity, setQuantity] = useState(0)

  const [isAddToCart, setIsAddToCart] = useState(false)

  function handleAddCoffeToCart() {
    addCoffeToCart({ id, imgUrl, tags, title, description, price, quantity })

    toast.success('Adicionado')

    setIsAddToCart(true)
    setTimeout(() => {
      setIsAddToCart(false)
    }, 2000)
  }

  return (
    <CardContainer>
      <img src={imgUrl} alt={title} />

      <TagsContainer>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagsContainer>

      <CoffeDescription>
        <h3>{title}</h3>
        <p>{description}</p>
      </CoffeDescription>

      <CoffeFooter>
        <div className="price">
          <span>R$</span>
          <h4>{formatNumberToReal(price)}</h4>
        </div>

        <div className="quantity">
          <div>
            <span
              className="sub"
              onClick={() => {
                setQuantity((state) => {
                  if (state > 0) {
                    return state - 1
                  }
                  return state
                })
              }}
            >
              <Minus size={14} weight="bold" />
            </span>
            <input
              type="number"
              placeholder="0"
              value={quantity}
              onChange={(e) => {
                const value = Number(e.target.value)
                if (value >= 0 && value <= 99) {
                  setQuantity(value)
                }
              }}
            />
            <span
              className="add"
              onClick={() => {
                setQuantity((state) => {
                  if (state < 99) {
                    return state + 1
                  }
                  return state
                })
              }}
            >
              <Plus size={14} weight="bold" />
            </span>
          </div>

          <button disabled={quantity === 0} onClick={handleAddCoffeToCart}>
            {isAddToCart ? (
              <Check size={22} weight="fill" />
            ) : (
              <ShoppingCartSimple size={22} weight="fill" />
            )}
          </button>
        </div>
      </CoffeFooter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="alert"
      />
    </CardContainer>
  )
}
