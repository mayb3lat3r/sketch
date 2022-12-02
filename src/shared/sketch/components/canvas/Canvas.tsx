import { useActions, useSelector } from '@tramvai/state';
import type { MutableRefObject } from 'react';
import React, { useEffect, useRef } from 'react';
import { pushToUndoAction, setCanvasAction } from '../../store/actions';
import { SketchStore } from '../../store/store';
import s from './canvas.module.css';

type CanvasProps = {
  width: number;
  height: number;
};

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const setCanvas = useActions(setCanvasAction);
  const setPushToUndo = useActions(pushToUndoAction);

  useEffect(() => {
    setCanvas(canvasRef.current); // TODO: фикс дабл рендера

    const dataUrl = localStorage.getItem('dataUrl');
    const ctx = canvasRef.current.getContext('2d');

    if (dataUrl && ctx) {
      const img = new Image();

      img.src = dataUrl;
      img.onload = () => {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.drawImage(
          img,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      };
    }
  }, [setCanvas]);

  const undoList = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.undoList
  );

  useEffect(() => {
    const { length } = undoList;

    if (length) {
      const dataUrl = undoList[length - 1];
      localStorage.setItem('dataUrl', dataUrl);
    }
  }, [undoList]);

  const mouseDownHandler = () => {
    setPushToUndo(canvasRef.current.toDataURL());
  };

  return (
    <canvas
      className={s.canvas}
      width={width}
      height={height}
      ref={canvasRef}
      onMouseDown={() => mouseDownHandler()}
    />
  );
};

export default Canvas;
