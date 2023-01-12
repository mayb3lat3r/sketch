import { useActions, useSelector } from '@tramvai/state';
import type { MutableRefObject } from 'react';
import React, { useEffect, useRef } from 'react';
import {
  setCanvasAction,
  pushToHistoryAction,
  sliceStoryAction,
  setIsLastBrowseAction,
  setHistoryAction,
  setCurrentIndexFrameAction,
} from '../../store/actions';
import { SketchStore } from '../../store/store';
import s from './canvas.module.css';

const setDefaultStorage = () => {
  localStorage.setItem('history', `[]`);
  localStorage.setItem('currentIndexFrame', '-1');
  localStorage.setItem('isLastBrowse', '0');
};

type CanvasProps = {
  width: number;
  height: number;
};

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const setCanvas = useActions(setCanvasAction);

  const pushToHistory = useActions(pushToHistoryAction);
  const sliceStory = useActions(sliceStoryAction);

  const setHistory = useActions(setHistoryAction);
  const setCurrentINdexFrame = useActions(setCurrentIndexFrameAction);

  const isLastBrowse = useSelector(
    SketchStore,
    ({ sketchStore }) => sketchStore.canvasStore.browser.isLastBrowse
  );
  const setIsLastBrowse = useActions(setIsLastBrowseAction);

  useEffect(() => {
    setCanvas(canvasRef.current); // TODO: фикс дабл рендера

    let dataUrl;

    const historyStorage = localStorage.getItem('history');
    const currentIndexFrameStorage = localStorage.getItem('currentIndexFrame');
    const isLastBrowseStorage = localStorage.getItem('isLastBrowse');

    if (historyStorage && typeof currentIndexFrameStorage === 'string') {
      const historyStorageParsed = JSON.parse(historyStorage);
      const index = Number(currentIndexFrameStorage);

      setHistory(historyStorageParsed);
      setCurrentINdexFrame(index);

      dataUrl = historyStorageParsed[index];
    } else {
      setDefaultStorage();
    }

    if (isLastBrowseStorage) {
      setIsLastBrowse(Boolean(isLastBrowseStorage));
    }

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
  }, [setCanvas, setCurrentINdexFrame, setHistory, setIsLastBrowse]);

  const mouseUpHandler = async () => {
    if (isLastBrowse) {
      await sliceStory();
      await setIsLastBrowse(false);
      localStorage.setItem('isLastBrowse', '0');
    }

    const dataUrl = canvasRef.current.toDataURL();

    await pushToHistory(dataUrl);
    const historyStorage = localStorage.getItem('history')!;

    if (Array.from(JSON.parse(historyStorage)).length === 0) {
      localStorage.setItem('history', JSON.stringify([dataUrl]));
    }
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
