import React, {useState} from 'react';
import Konva from 'konva';
import {Layer, Rect, Stage, Text} from 'react-konva';
import useStore from '../store';
import {BaseImage, Regions} from './index';

function getRelativePointerPosition(node) {
  // the function will return pointer position relative to the passed node
  const transform = node.getAbsoluteTransform().copy();
  // to detect relative position we need to invert transform
  transform.invert();

  // get pointer (say mouse or touch) position
  const pos = node.getStage().getPointerPosition();

  // now we find relative point
  return transform.point(pos);
}

function Canvas() {
  const [annotations, setAnnotations] = useState([]);
  const [newAnnotation, setNewAnnotation] = useState([]);
  const [minji, setMinji] = useState('');

  const regions = useStore((state) => state.regions);
  const setRegions = useStore((state) => state.setRegions);

  // const value = useStore((state) => state.value);
  // const setValue = useStore((state) => state.setValue);

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
      annotations.push(annotationToAdd);
      setNewAnnotation([]);
      setAnnotations(annotations);
      const value = window.prompt('이름을 정해주세요');
      setMinji(value);
      console.log(minji, 'minji@@@1');
      const point = getRelativePointerPosition(event.target.getStage());
      const region = {
        id: value,
        color: Konva.Util.getRandomColor(),
        points: [point],
      };
      setRegions(regions.concat([region]));
      console.log(minji, 'minji@@@2');
    }
  };

  const annotationsToDraw = [...annotations, ...newAnnotation];

  return (
    <React.Fragment>
      <Stage
        width={750}
        height={700}
        className="canvas"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        // onClick={(e) => {
        //   const clickedNotOnRegion = e.target.name() !== 'region';
        //   if (clickedNotOnRegion) {
        //     selectRegion(null);
        //   }
        // }}
        // onMouseDown={(e) => {
        //   toggleDrawing(true);
        //   const point = getRelativePointerPosition(e.target.getStage());
        //   const region = {
        //     id: '김밍디id++',
        //     color: Konva.Util.getRandomColor(),
        //     points: [point],
        //   };
        //   setRegions(regions.concat([region]));
        // }}
        // onMouseMove={(e) => {
        //   if (!isDrawing) {
        //     return;
        //   }
        //   const lastRegion = {...regions[regions.length - 1]};
        //   const point = getRelativePointerPosition(e.target.getStage());
        //   lastRegion.points = lastRegion.points.concat([point]);
        //   regions.splice(regions.length - 1, 1);
        //   setRegions(regions.concat([lastRegion]));
        // }}
        // onMouseUp={(e) => {
        //   if (!isDrawing) {
        //     return;
        //   }
        //   const lastRegion = regions[regions.length - 1];
        //   if (lastRegion.points.length < 3) {
        //     regions.splice(regions.length - 1, 1);
        //     setRegions(regions.concat());
        //   }
        //   const minji = window.prompt('이름을 정해주세요');
        //   setMinji(minji);
        //   toggleDrawing();
        // }}
      >
        <BaseImage />
        <Layer>
          {annotationsToDraw.map((value) => {
            return (
              <>
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
                  text={`${minji ? minji : '이 제품은 무엇일까요 ?'}`}
                />
              </>
            );
          })}
        </Layer>
        <Regions />
      </Stage>
    </React.Fragment>
  );
}

export default Canvas;
