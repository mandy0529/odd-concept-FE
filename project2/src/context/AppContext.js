import React, { useContext, useEffect, useState } from 'react'

const getLocalStorage = () => {
  let position = localStorage.getItem('position')
  if (position) {
    return (position = JSON.parse(localStorage.getItem('position')))
  } else {
    return []
  }
}

export const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [position, setPosition] = useState(getLocalStorage())
  const [newPosition, setNewPosition] = useState([])
  const [isModal, setIsModal] = useState(false)
  const [value, setValue] = useState('')
  const [addPosition, setAddPosition] = useState({})
  const [msg, setMsg] = useState({ state: false, message: '' })
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)

  // position setting
  const handleMouseDown = (event) => {
    if (newPosition.length === 0) {
      const { x, y } = event.target.getStage().getPointerPosition()
      setNewPosition([{ x, y, width: 0, height: 0, key: '0' }])
    }
    setValue('')
  }

  const handleMouseMove = (event) => {
    if (newPosition.length === 1) {
      const sx = newPosition[0].x
      const sy = newPosition[0].y
      const { x, y } = event.target.getStage().getPointerPosition()

      setNewPosition([
        {
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: '0',
        },
      ])
    }
  }

  const handleMouseUp = (event) => {
    if (newPosition.length === 1) {
      const sx = newPosition[0].x
      const sy = newPosition[0].y
      const { x, y } = event.target.getStage().getPointerPosition()
      const addPositioning = {
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        key: position.length + 1,
      }
      setIsModal(true)
      setNewPosition([])
      setAddPosition(addPositioning)
    }
  }

  // modal
  const closeModal = () => {
    setIsModal(false)
  }

  // input
  const handleSubmit = (e) => {
    e.preventDefault()
    const addPositions = [...position, { ...addPosition, text: value }]
    if (!value) {
      controlMsg()
    } else if (value && editMode) {
      const editItem = position.map((item) => {
        if (Number(item.key) === Number(editId)) {
          return { ...item, text: value }
        }
        return item
      })
      setPosition(editItem)
      setEditId(null)
      setEditMode(false)
      closeModal()
    } else {
      setPosition(addPositions)
      closeModal()
    }
  }

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }

  // alert message
  const controlMsg = () => {
    setMsg({
      ...msg,
      state: true,
      message: '제품 이름이 필요해요. 다시 입력해주세요',
    })
  }

  const closeMsg = () => {
    setMsg({
      ...msg,
      state: false,
      message: '',
    })
  }

  const handleDelete = (key) => {
    console.log(key, '@@@@@@@delete')
    const deletedItem = position.filter(
      (item) => Number(item.key) !== Number(key),
    )
    setPosition(deletedItem)
  }

  const handleEdit = (key) => {
    const editPosition = position.find((item) => item.key === key)
    setValue(editPosition.text)
    setEditMode(true)
    setIsModal(true)
    setEditId(Number(key))
  }

  useEffect(() => {
    localStorage.setItem('position', JSON.stringify(position))
  }, [position])

  return (
    <AppContext.Provider
      value={{
        position,
        setPosition,
        setNewPosition,
        newPosition,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        isModal,
        closeModal,
        handleChange,
        handleSubmit,
        value,
        addPosition,
        closeMsg,
        msg,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
