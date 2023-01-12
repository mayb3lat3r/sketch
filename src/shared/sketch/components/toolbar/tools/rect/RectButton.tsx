import { useActions, useSelector } from '@tramvai/state';
import React from 'react';
import { setToolAction } from '~/shared/sketch/store/actions';
import { SketchStore } from '~/shared/sketch/store/store';
import cn from 'classnames';
import type { IsToolActive } from '../../Toolbar';
import s from '../general.module.css';
import icon from './img/square.png';
import RectTool from './Rect';

const RectButton = ({
  setActive,
  isToolActive,
}: {
  setActive: any;
  isToolActive: IsToolActive;
}) => {
  const setRectAction = useActions(setToolAction);
  const canvas = useSelector(
    SketchStore,
    ({ sketchStore }) => sketchStore.canvasStore.canvas
  );

  const setRect = () => {
    if (canvas) {
      setActive({ tool: 'rect', isActive: true });
      setRectAction(new RectTool(canvas));
    }
  };

  return (
    <button
      type="button"
      className={cn(s.tool, isToolActive.tool === 'rect' && s.active)}
      onClick={setRect}
    >
      <img src={icon} alt="eraser" />
    </button>
  );
};

export default RectButton;
