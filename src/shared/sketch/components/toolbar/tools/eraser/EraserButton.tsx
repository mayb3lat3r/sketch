import React from 'react';
import { useSelector } from '@tramvai/state';
import { SketchStore } from '~/shared/sketch/store/store';
import icon from './img/eraser.png';

import s from '../general.module.css';

const EraserButton = () => {
  const canvas = useSelector(SketchStore, (state) => state.sketchStore.canvas);
  const context = canvas?.getContext('2d');

  const clearAll = () => {
    if (context && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <button type="button" className={s.tool} onClick={clearAll}>
      <img src={icon} alt="eraser" />
    </button>
  );
};

export default EraserButton;
