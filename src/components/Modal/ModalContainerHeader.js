import styled from 'styled-components'

const ModalContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.color.dark};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`

export default ModalContainerHeader
