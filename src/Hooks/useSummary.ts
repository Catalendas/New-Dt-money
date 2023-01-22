import { useContextSelector } from 'use-context-selector'
import { TransectionsContext } from '../contexts/TransectionsContext'

export function useSummary() {
  const transections = useContextSelector(TransectionsContext, (contex) => {
    return contex.transections
  })

  const summary = transections.reduce(
    (acc, transection) => {
      if (transection.type === 'income') {
        acc.income += transection.price
        acc.total += transection.price
      } else {
        acc.outcome += transection.price
        acc.total -= transection.price
      }

      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )

  return summary
}
