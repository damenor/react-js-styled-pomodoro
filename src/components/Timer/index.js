import { useState, useEffect } from 'react'
import styled from 'styled-components'

import ProgressBarCircle from '../ProgressBarCircle'

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => `calc(${theme.timeProgressBarSize} + 2rem)`};
  height: ${({ theme }) => `calc(${theme.timeProgressBarSize} + 2rem)`}; 
  margin: 2rem auto;
  background-color: ${({ theme }) => theme.color.bgDark};
  border-radius: 50%; 
`

const Timer = () => {

  const [progress, setProgress] = useState(68)

  useEffect(() => {
    // setInterval(() => {
    //   setProgress(prevState => {
    //     console.log(prevState)
    //     return prevState += 1
    //   })
    // }, 1000)
  }, [])

  return (
    <TimerContainer>
      <ProgressBarCircle progress={progress}>
        <span>17:59</span>
        <span>PAUSE</span>
      </ProgressBarCircle>
    </TimerContainer>
  )

}

export default Timer
