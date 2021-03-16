import styled from 'styled-components'

const ModalContainer = styled.div`
  width: 80%;
  max-width: 300px;
  margin: 0 auto;
  height: 60vh;
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 2rem;
`

export default ModalContainer
