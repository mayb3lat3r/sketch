import React from 'react';
import { useSelector } from '@tramvai/state';
import { SketchStore } from '~/shared/sketch/store/store';
import icon from './img/eraser.png';

import s from '../general.module.css';

const EraserButton = () => {
  const canvas = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.canvas
  );
  const ctx = canvas?.getContext('2d');

  const clearAll = () => {
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const data = canvas.toDataURL();
      localStorage.setItem('dataUrl', data);
    }
  };

  return (
    <button type="button" className={s.tool} onClick={clearAll}>
      <img src={icon} alt="eraser" />
    </button>
  );
};

export default EraserButton;
