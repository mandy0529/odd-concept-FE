import React from 'react'
import { Group, Layer, Rect, Stage, Text } from 'react-konva'
import { useGlobalContext } from '../context/AppContext'
import { BaseImage } from './index'
import { Wrapper } from '../styles/Canvas.styles.js'

function Canvas() {
  const {
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    position,
    newPosition,
    handleEdit,
    handleDelete,
  } = useGlobalContext()

  let itemsList = [...position, ...newPosition]

  return (
    <Wrapper>
      <div>
        {itemsList.map((item) => {
          if (!item.text) return null
          const { key, text } = item
          return (
            <ul key={key}>
              <li>{text}</li>
              <button onClick={() => handleEdit(key)}>✏️</button>
              <button onClick={() => handleDelete(key)}>❌</button>
            </ul>
          )
        })}
      </div>
      <Stage
        width={700}
        height={800}
        className="canvas"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <BaseImage />
        <Layer>
          {itemsList.map((value) => {
            return (
              <Group key={value.key}>
                <Rect
                  key={value.x}
                  x={value.x}
                  y={value.y}
                  width={value.width}
                  height={value.height}
                  fill="rgba(0, 0, 0, 0.1)"
                  stroke="#343a40"
                  strokeWidth="1"
                />
                <Text
                  x={value.x}
                  y={value.y}
                  width={value.width}
                  height={value.height}
                  verticalAlign="top"
                  text={value.text}
                  fontSize={18}
                  fontStyle="bold"
                  padding="10"
                  fill="white"
                />
              </Group>
            )
          })}
        </Layer>
      </Stage>
    </Wrapper>
  )
}

export default Canvas
