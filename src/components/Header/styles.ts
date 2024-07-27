import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: ${({ theme }) => theme['base-profile']};
`

export const HeaderBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  img {
    height: auto;
    max-width: 300px;
  }

  @media (max-width: 720px) {
    justify-content: center;
  }
`

export const Logo = styled.img`
  margin-top: 10px;
  align-self: baseline;
  font-size: 0;
  max-width: 150px;
`
