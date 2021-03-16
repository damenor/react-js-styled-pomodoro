import styled from 'styled-components'

const ProgressBarCircleStatusHalf = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0.5rem solid ${({ theme }) => theme.color.bgDark};
  border-radius: 50%;
  ${({ theme }) => `
    clip: rect(0, calc(${theme.timeProgressBarSize} / 2), ${theme.timeProgressBarSize}, 0);
  `}
  ${({ isLeft, progress, theme }) => {
    if(!isLeft && progress < 50) return `
      display: none;
    `
    if(!isLeft && progress >= 50) return `
    border-color: ${theme.color.primary};
    transform: rotate(180deg);
    `
    if(isLeft) return `
      border-color: ${theme.color.primary};
      transform: rotate(${progress * 3.6}deg);
    `
  }}
`

export default ProgressBarCircleStatusHalf