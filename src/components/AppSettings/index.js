import { useState } from 'react'
import styled from 'styled-components'

import Modal from '../Modal'

const AppSettings = styled.div`
  display: flex;
  justify-content: center;
`
const AppSettingsButton = styled.button`
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const AppSettingsComponent = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onAcceptModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppSettings>
      {
        !isModalOpen && <AppSettingsButton 
          onClick={() => setIsModalOpen(prevState => !prevState)}>
            Settings
        </AppSettingsButton>
      }
      <Modal 
        isOpen={isModalOpen} 
        setIsOpen={setIsModalOpen}
        onAccept={onAcceptModal}>

      </Modal>
    </AppSettings>
  )

}

export default AppSettingsComponent