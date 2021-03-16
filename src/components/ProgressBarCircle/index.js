import ProgressBarCircleChildren from './ProgressBarCircleChildren'
import ProgressBarCircleContainer from './ProgressBarCircleContainer'
import ProgressBarCircleStatus from './ProgressBarCircleStatus'

const ProgressBarCircle = ({ children , progress}) => {
  return (
    <ProgressBarCircleContainer>
      <ProgressBarCircleChildren>
        { children }
      </ProgressBarCircleChildren>
      <ProgressBarCircleStatus progress={progress}></ProgressBarCircleStatus>
    </ProgressBarCircleContainer>
  )
}

export default ProgressBarCircle