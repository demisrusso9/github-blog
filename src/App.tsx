import 'react-toastify/dist/ReactToastify.css';
import './globals.css'

import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components'

import { BlogProvider } from '@/contexts/BlogContext'
import { Routes } from '@/Routes'

import { Header } from './components/Header'
import { Wrapper } from './styles'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

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
