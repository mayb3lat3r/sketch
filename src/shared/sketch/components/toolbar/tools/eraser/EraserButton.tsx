import React from 'react';
import { useActions, useSelector } from '@tramvai/state';
import { SketchStore } from '~/shared/sketch/store/store';
import { pushToHistoryAction } from '~/shared/sketch/store/actions';
import icon from './img/eraser.png';

import s from '../general.module.css';

const EraserButton = () => {
  const canvas = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.canvas
  );
  const pushToHistory = useActions(pushToHistoryAction);

  const ctx = canvas?.getContext('2d');

  const clearAll = () => {
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL();

      const img = new Image();

      img.src = dataUrl;
      img.onload = () => {
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      };

      pushToHistory(dataUrl);
    }
  };

  return (
    <button type="button" className={s.tool} onClick={clearAll}>
      <img src={icon} alt="eraser" />
    </button>
  );
};

export default EraserButton;
