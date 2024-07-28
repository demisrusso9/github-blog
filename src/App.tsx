import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Routes } from '@/Routes'
import { Header } from './components/Header'
import { Wrapper } from './styles'
import { BlogProvider } from '@/contexts/BlogContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer />

      <Header />

      <Wrapper>
        <BlogProvider>
          <Routes />
        </BlogProvider>
      </Wrapper>
    </ThemeProvider>
  )
}
