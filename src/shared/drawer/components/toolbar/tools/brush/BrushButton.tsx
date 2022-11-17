import React from 'react';
import { useActions, useSelector } from '@tramvai/state';
import { setToolAction } from '../../../../../../store/tool/actions/setTool';
import { CanvasStore } from '../../../../../../store/canvas/canvasStore';
import icon from './img/paint-brush.png';
import s from '../general.module.css';
import BrushTool from './Brush';

const BrushButton = () => {
  const setBrushAction = useActions(setToolAction);
  const canvas = useSelector(CanvasStore, (state) => state.canvas.canvas);

  const setBrush = () => {
    setBrushAction(new BrushTool(canvas));
  };

  return (
    <button type="button" className={s.tool} onClick={setBrush}>
      <img src={icon} alt="brush" />
    </button>
  );
};

export default BrushButton;
