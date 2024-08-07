import logo from '@/assets/logo.svg'
import rectangleLeft from '@/assets/rectangle-left.png'
import rectangleRight from '@/assets/rectangle-right.png'

import { HeaderBackground, HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderBackground>
        <img src={rectangleLeft} alt='rectangle-left' />
        
        <Logo src={logo} alt='logo' />
        
        <img src={rectangleRight} alt='rectangle-right' />
      </HeaderBackground>
    </HeaderContainer>
  )
}
