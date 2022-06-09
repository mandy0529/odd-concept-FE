import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/AppContext'
import { Wrapper } from '../../styles/Alert/Msg.styles'

function Msg({ message }) {
  const { closeAlert } = useGlobalContext()

  useEffect(() => {
    setTimeout(() => {
      closeAlert()
    }, 3000)
  }, [message.state])

  return (
    <Wrapper>
      <div>{message}</div>
    </Wrapper>
  )
}

export default Msg
