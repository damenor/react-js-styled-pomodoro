import { useState } from 'react'

import AppStatusContainer from './AppStatusContainer'
import AppStatusItem from './AppStatusItem'

const AppStatus = props => {

  const [items, setItems] = useState([
    { id: 0, label: 'pomodoro', isActive: false },
    { id: 1, label: 'short break', isActive: true },
    { id: 2, label: 'long break', isActive: false },
  ])

  const handleOnClickItem = (id) => {
    setItems(prevState => prevState.map(item => {
      item.isActive = item.id === id
      return item
    }))
  }

  return (
    <AppStatusContainer>
      { items.map(({ label, isActive, id }) => (
        <AppStatusItem 
          key={`${id}-${label}`}
          isActive={isActive} 
          onClick={() => handleOnClickItem(id)}
          {...props}>
          { label }
        </AppStatusItem>
      )) }
    </AppStatusContainer>
  )

}

export default AppStatus