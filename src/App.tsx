import { ThemeProvider } from 'styled-components'
import { TransectionsProvider } from './contexts/TransectionsContext'
import { Transections } from './pages/Transactions'
import { GlobalStyle } from './style/global'
import { defaultTheme } from './style/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransectionsProvider>
        <Transections />
      </TransectionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
