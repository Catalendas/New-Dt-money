import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Transection {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransectionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransectionContextType {
  transections: Transection[]
  fatchTransections: (query?: string) => Promise<void>
  createTransection: (data: CreateTransectionInput) => Promise<void>
}

interface TransectionsProviderProps {
  children: ReactNode
}

export const TransectionsContext = createContext({} as TransectionContextType)

export function TransectionsProvider({ children }: TransectionsProviderProps) {
  const [transections, setTransections] = useState<Transection[]>([])

  const fatchTransections = useCallback(async (query?: string) => {
    const response = await api.get('trasections', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransections(response.data)
  }, [])

  const createTransection = useCallback(
    async (data: CreateTransectionInput) => {
      const { description, category, price, type } = data

      const response = await api.post('trasections', {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      })

      setTransections((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fatchTransections()
  }, [fatchTransections])

  return (
    <TransectionsContext.Provider
      value={{
        transections,
        fatchTransections,
        createTransection,
      }}
    >
      {children}
    </TransectionsContext.Provider>
  )
}
