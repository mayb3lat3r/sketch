import { useActions, useSelector } from '@tramvai/state';
import type { MutableRefObject } from 'react';
import React, { useEffect, useRef } from 'react';
import {
  setCanvasAction,
  pushToHistoryAction,
  incrementCurrentIndexFrameAction,
  sliceStoryAction,
  setIsLastBrowseAction,
} from '../../store/actions';
import { SketchStore } from '../../store/store';
import s from './canvas.module.css';

type CanvasProps = {
  width: number;
  height: number;
};

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const setCanvas = useActions(setCanvasAction);
  const pushToHistory = useActions(pushToHistoryAction);
  const incrementCurrentIndexFrame = useActions(
    incrementCurrentIndexFrameAction
  );
  const sliceStory = useActions(sliceStoryAction);
  const isLastRedo = useSelector(
    SketchStore,
    ({ sketchStore }) => sketchStore.canvasStore.browser.isLastBrowse
  );
  const setIsLastRedo = useActions(setIsLastBrowseAction);

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

  const mouseUpHandler = () => {
    if (isLastRedo) {
      sliceStory();
      setIsLastRedo(false);
    }

    const dataUrl = canvasRef.current.toDataURL();
    localStorage.setItem('dataUrl', dataUrl);
    pushToHistory(dataUrl);
    incrementCurrentIndexFrame();
  };

  return (
    <canvas
      className={s.canvas}
      width={width}
      height={height}
      ref={canvasRef}
      onMouseUp={() => mouseUpHandler()}
    />
  );
};

export default Canvas;
