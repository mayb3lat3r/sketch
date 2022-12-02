import React from 'react';
import { useActions, useSelector } from '@tramvai/state';
import { setToolAction } from '../../../../store/actions';
import { SketchStore } from '../../../../store/store';
import icon from './img/paint-brush.png';
import s from '../general.module.css';
import BrushTool from './Brush';

const BrushButton = () => {
  const setBrushAction = useActions(setToolAction);
  const canvas = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.canvas
  );

  const setBrush = () => {
    if (canvas) {
      setBrushAction(new BrushTool(canvas));
    }
  };

  return (
    <button type="button" className={s.tool} onClick={setBrush}>
      <img src={icon} alt="brush" />
    </button>
  );
};

export default BrushButton;
