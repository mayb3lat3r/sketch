import React from 'react';
import { useActions, useSelector } from '@tramvai/state';
import cn from 'classnames';
import { setToolAction } from '../../../../store/actions';
import { SketchStore } from '../../../../store/store';
import icon from './img/paint-brush.png';
import s from '../general.module.css';
import BrushTool from './Brush';
import type { IsToolActive } from '../../Toolbar';

const BrushButton = ({
  setActive,
  isToolActive,
}: {
  setActive: any;
  isToolActive: IsToolActive;
}) => {
  const setBrushAction = useActions(setToolAction);
  const canvas = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.canvas
  );

  const setBrush = () => {
    if (canvas) {
      setActive({ tool: 'brush' });
      setBrushAction(new BrushTool(canvas));
    }
  };

  return (
    <button
      type="button"
      className={cn(s.tool, isToolActive.tool === 'brush' && s.active)}
      onClick={setBrush}
    >
      <img src={icon} alt="brush" />
    </button>
  );
};

export default BrushButton;
