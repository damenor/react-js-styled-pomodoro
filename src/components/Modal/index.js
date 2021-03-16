import styled from 'styled-components'

import ModalButton from './ModalButton'
import ModalContainer from './ModalContainer'
import ModalContainerContent from './ModalContainerContent'
import ModalContainerHeader from './ModalContainerHeader'
import ModalContainerHeaderClose from './ModalContainerHeaderClose'
import ModalContainerHeaderTitle from './ModalContainerHeaderTitle'

const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: all .2s;
  ${({ isOpen }) => {
    console.log(isOpen)
    if(isOpen) return `
      display: flex;
      background-color: rgba(0, 0, 0, 0.5);
    `
  }}
`

const ModalComponent = ({ isOpen, setIsOpen, onAccept }) => {

  return (
    <Modal isOpen={isOpen}>
      <ModalContainer>
        <ModalContainerHeader>
          <ModalContainerHeaderTitle>Settings</ModalContainerHeaderTitle>
          <ModalContainerHeaderClose onClick={() => setIsOpen(false)}>x</ModalContainerHeaderClose>
        </ModalContainerHeader>
        <ModalContainerContent></ModalContainerContent>
      </ModalContainer>
      <ModalButton onClick={onAccept}>Apply</ModalButton>
    </Modal>
  )
}

export default ModalComponent