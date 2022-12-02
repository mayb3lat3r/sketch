import { useActions } from '@tramvai/state';
import type { MutableRefObject } from 'react';
import React, { useEffect, useRef } from 'react';
import { pushToUndoAction, setCanvasAction } from '../../store/actions';
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
  }, [setCanvas]);

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
