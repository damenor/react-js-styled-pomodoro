import styled from 'styled-components'

const AppStatusItem = styled.div`
  padding: 1rem;
  text-align: center;
  border-radius: 2rem;
  transition: all 0.2s;
  cursor: pointer;

  ${({ isActive, theme }) => {
    if (isActive) return `
      color: ${theme.color.primaryContrast};
      background-color: ${theme.color.primary};
    `
  }}
`
export default AppStatusItem
