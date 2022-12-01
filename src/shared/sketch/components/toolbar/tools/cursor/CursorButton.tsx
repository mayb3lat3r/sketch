import React from 'react';
import { useActions, useSelector } from '@tramvai/state';
import { setToolAction } from '../../../../store/actions';
import icon from './img/cursor.png';
import s from '../general.module.css';
import { SketchStore } from '../../../../store/store';

const Cursor = () => {
  const setCursorAction = useActions(setToolAction);
  const tool = useSelector(SketchStore, (state) => state.sketchStore.tool);

  const setCursor = () => {
    setCursorAction(null);

    if (tool) {
      tool.destroyEvent();
    }
  };

  return (
    <button type="button" className={s.tool} onClick={setCursor}>
      <img src={icon} alt="cursor" />
    </button>
  );
};

export default Cursor;
