import styled from 'styled-components'

const AppStatusContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.bgDark};
  border-radius: 2rem;
`

export default AppStatusContainer