import styled from 'styled-components'
import ProgressBarCircleStatusHalf from './ProgressBarCircleStatusHalf'

const ProgressBarCircleStatus = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ theme }) => `
    clip: rect(0, ${theme.timeProgressBarSize}, ${theme.timeProgressBarSize}, calc(${theme.timeProgressBarSize} / 2));
  `}
  ${({ progress }) => {
    if(progress > 50) return `
      clip: rect(auto, auto, auto, auto);
    `
  }}
`

const ProgressBarCircleStatusComponent = ({ progress }) => (
  <ProgressBarCircleStatus progress={progress}>
    <ProgressBarCircleStatusHalf 
      progress={progress}
      isLeft={true}>
    </ProgressBarCircleStatusHalf>
    <ProgressBarCircleStatusHalf 
      progress={progress}
      isLeft={false}>
    </ProgressBarCircleStatusHalf>
  </ProgressBarCircleStatus>
)

export default ProgressBarCircleStatusComponent
