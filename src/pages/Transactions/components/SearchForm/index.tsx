import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContextSelector } from 'use-context-selector'
import { TransectionsContext } from '../../../../contexts/TransectionsContext'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const fatchTransections = useContextSelector(
    TransectionsContext,
    (contex) => {
      return contex.fatchTransections
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransection(data: SearchFormInputs) {
    await fatchTransections(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransection)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        <span>Buscar</span>
      </button>
    </SearchFormContainer>
  )
}
