import { HeaderContainer, HeaderBackground, Logo } from './styles'
import logo from '@/assets/logo.svg'
import rectangleLeft from '@/assets/rectangle-left.png'
import rectangleRight from '@/assets/rectangle-right.png'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt='logo' />

      <HeaderBackground>
        <img src={rectangleLeft} alt='rectangle-left' />
        <img src={rectangleRight} alt='rectangle-right' />
      </HeaderBackground>
    </HeaderContainer>
  )
}
