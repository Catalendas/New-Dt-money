import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransectionsType,
  TransectionsTypeButton,
} from './styled'
import { ArrowCircleUp, X } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { TransectionsContext } from '../../contexts/TransectionsContext'
import { useContextSelector } from 'use-context-selector'

const newTransectionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type NewTransectionFormInputs = zod.infer<typeof newTransectionFormSchema>

export function NewTransectionModal() {
  const createTransection = useContextSelector(
    TransectionsContext,
    (context) => {
      return context.createTransection
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<NewTransectionFormInputs>({
    resolver: zodResolver(newTransectionFormSchema),
  })

  async function handleCreateNewTransection(data: NewTransectionFormInputs) {
    const { description, category, price, type } = data
    createTransection({
      description,
      category,
      price,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleCreateNewTransection)}>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register('description')}
            />
            <input
              type="number
                            "
              placeholder="Preço"
              required
              {...register('price', { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register('category')}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransectionsType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransectionsTypeButton variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransectionsTypeButton>

                    <TransectionsTypeButton variant="outcome" value="outcome">
                      <ArrowCircleUp size={24} />
                      Saida
                    </TransectionsTypeButton>
                  </TransectionsType>
                )
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
