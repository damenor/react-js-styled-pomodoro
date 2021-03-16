import styled from 'styled-components'

const ModalButton = styled.button`
  margin-top: -1rem;
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.fontSizes.l};
  border: none;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 2rem;
  transition: all .2s;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`

export default ModalButton
