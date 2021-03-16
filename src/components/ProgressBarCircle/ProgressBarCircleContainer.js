import styled from 'styled-components'

const ProgressBarCircleContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.timeProgressBarSize};
  height: ${({ theme }) => theme.timeProgressBarSize};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.bgDark};
  border-radius: 50%; 
`

export default ProgressBarCircleContainer
