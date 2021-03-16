import styled from 'styled-components'

const ModalContainerHeaderClose = styled.button`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  border: none;
  transition: all .2s;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`

export default ModalContainerHeaderClose
