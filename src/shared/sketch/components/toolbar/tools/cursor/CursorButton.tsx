import React from 'react';
import { useActions, useSelector } from '@tramvai/state';
import cn from 'classnames';
import { setToolAction } from '../../../../store/actions';
import icon from './img/cursor.png';
import s from '../general.module.css';
import { SketchStore } from '../../../../store/store';
import type { IsToolActive } from '../../Toolbar';

const Cursor = ({
  setActive,
  isToolActive,
}: {
  setActive: any;
  isToolActive: IsToolActive;
}) => {
  const setCursorAction = useActions(setToolAction);
  const canvas = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.canvas
  );
  const tool = useSelector(SketchStore, (state) => state.sketchStore.tool);

  const setCursor = () => {
    if (canvas) {
      setActive({ tool: 'cursor' });

      if (tool) {
        tool.destroyEvent();
      }

      setCursorAction(null);
    }
  };

  return (
    <button
      type="button"
      className={cn(s.tool, isToolActive.tool === 'cursor' && s.active)}
      onClick={setCursor}
    >
      <img src={icon} alt="cursor" />
    </button>
  );
};

export default Cursor;
