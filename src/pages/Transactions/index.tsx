import { Calendar, TagSimple } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransectionsContext } from '../../contexts/TransectionsContext'
import { dateFormatter, priceFormatter } from '../../utils/Formater'
import { SearchForm } from './components/SearchForm'
import {
  PriceHightLight,
  TransectionsContainer,
  TransectionsTable,
} from './style'

export function Transections() {
  const transections = useContextSelector(TransectionsContext, (context) => {
    return context.transections
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransectionsContainer>
        <div>
          <span>Transações</span>
          <span>2 itens</span>
        </div>
        <SearchForm />

        <TransectionsTable>
          <tbody>
            {transections.map((transection) => {
              return (
                <tr key={transection.id}>
                  <td width="50%" className="title">
                    {transection.description}
                  </td>
                  <td className="price">
                    <PriceHightLight variant={transection.type}>
                      {transection.type === 'outcome' && '- '}
                      {priceFormatter.format(transection.price)}
                    </PriceHightLight>
                  </td>
                  <td className="datas">
                    <TagSimple />
                    {transection.category}
                  </td>
                  <td className="datas">
                    <Calendar />
                    {dateFormatter.format(new Date(transection.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransectionsTable>
      </TransectionsContainer>
    </div>
  )
}
