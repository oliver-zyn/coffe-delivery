import { ReactNode, createContext, useState } from 'react'

interface FormCheckoutContextProviderProps {
  children: ReactNode
}

interface FormCheckoutProps {
  cep: string
  street: string
  num: string
  comp: string
  district: string
  city: string
  uf: string
  payment: string
}

interface FormCheckoutContextType {
  formCheckout: FormCheckoutProps
  updateFormCheckout: (field: string, value: string) => void
  isFormCheckoutValid: () => boolean
}

export const FormCheckoutContext = createContext({} as FormCheckoutContextType)

export function FormCheckoutContextProvider({
  children,
}: FormCheckoutContextProviderProps) {
  const [formCheckout, setFormCheckout] = useState<FormCheckoutProps>({
    cep: '',
    street: '',
    num: '',
    comp: '',
    district: '',
    city: '',
    uf: '',
    payment: '',
  })

  function updateFormCheckout(field: string, value: string) {
    setFormCheckout((state) => ({
      ...state,
      [field]: value,
    }))
  }

  function isFormCheckoutValid() {
    const { comp, ...requiredFields } = formCheckout
    const values = Object.values(requiredFields)
    return values.every((value) => value.trim() !== '')
  }

  return (
    <FormCheckoutContext.Provider
      value={{ formCheckout, updateFormCheckout, isFormCheckoutValid }}
    >
      {children}
    </FormCheckoutContext.Provider>
  )
}
