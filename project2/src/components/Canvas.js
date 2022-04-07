import React, {useState} from 'react';
import {Group, Layer, Rect, Stage, Text} from 'react-konva';
import {BaseImage} from './index';

function Canvas() {
  const [annotations, setAnnotations] = useState([]);
  const [newAnnotation, setNewAnnotation] = useState([]);

  const handleMouseDown = (event) => {
    if (newAnnotation.length === 0) {
      const {x, y} = event.target.getStage().getPointerPosition();
      setNewAnnotation([{x, y, width: 0, height: 0, key: '0'}]);
    }
  };

  const handleMouseMove = (event) => {
    if (newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const {x, y} = event.target.getStage().getPointerPosition();

      setNewAnnotation([
        {
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: '0',
        },
      ]);
    }
  };

  const handleMouseUp = (event) => {
    if (newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const {x, y} = event.target.getStage().getPointerPosition();
      const annotationToAdd = {
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        key: annotations.length + 1,
      };
      setNewAnnotation([]);
      const value = window.prompt('이름을 정해주세요');
      const tempAnnotation = [
        ...annotations,
        {...annotationToAdd, minji: value},
      ];
      setAnnotations(tempAnnotation);
    }
  };

  const annotationsToDraw = [...annotations, ...newAnnotation];

  return (
    <React.Fragment>
      <div>
        <h1>안녕</h1>
        {annotationsToDraw.map((item) => {
          return (
            <div key={item.key}>
              <li>{item.minji}</li>
            </div>
          );
        })}
      </div>
      <Stage
        width={700}
        height={700}
        className="canvas"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <BaseImage />
        <Layer>
          {annotationsToDraw.map((value) => {
            return (
              <Group key={value.key}>
                <Rect
                  key={value.x}
                  x={value.x}
                  y={value.y}
                  width={value.width}
                  height={value.height}
                  fill="transparent"
                  stroke="black"
                />
                <Text
                  x={value.x}
                  y={value.y}
                  width={value.width}
                  height={value.height}
                  verticalAlign="middle"
                  text={value.minji}
                />
              </Group>
            );
          })}
        </Layer>
      </Stage>
    </React.Fragment>
  );
}

export default Canvas;
