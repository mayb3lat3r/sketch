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

  const mouseDownHandler = () => {
    const data = canvasRef.current.toDataURL();
    setPushToUndo(data);
  };

  const mouseUpHandler = () => {
    const data = canvasRef.current.toDataURL();
    localStorage.setItem('dataUrl', data);
  };

  return (
    <canvas
      className={s.canvas}
      width={width}
      height={height}
      ref={canvasRef}
      onMouseDown={() => mouseDownHandler()}
      onMouseUp={() => mouseUpHandler()}
    />
  );
};

export default Canvas;
