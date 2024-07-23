import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Routes } from '@/Routes'
import { Header } from './components/Header'
import { Wrapper } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />
      
      <Wrapper>
        <Routes />
      </Wrapper>
    </ThemeProvider>
  )
}
