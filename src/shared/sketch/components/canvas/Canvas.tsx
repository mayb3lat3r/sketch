import { useActions } from '@tramvai/state';
import type { MutableRefObject } from 'react';
import React, { useEffect, useRef } from 'react';
import { setCanvasAction } from '../../store/actions';
import s from './canvas.module.css';

type CanvasProps = {
  width: number;
  height: number;
};

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const setCanvas = useActions(setCanvasAction);

  useEffect(() => {
    setCanvas(canvasRef.current); // TODO: фикс дабл рендера
  }, [setCanvas]);

  return (
    <canvas
      className={s.canvas}
      width={width}
      height={height}
      ref={canvasRef}
    />
  );
};

export default Canvas;
