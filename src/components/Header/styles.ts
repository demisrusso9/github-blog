import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  position: relative;
  background: ${({ theme }) => theme['base-profile']};
`

export const HeaderBackground = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Logo = styled.img`
  position: absolute;
`
