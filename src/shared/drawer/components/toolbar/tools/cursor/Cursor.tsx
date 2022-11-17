import React from 'react';
import { useActions, useSelector } from '@tramvai/state';
import icon from './img/cursor.png';
import s from '../general.module.css';
import { setToolAction } from '../../../../../../store/tool/actions/setTool';
import { ToolStore } from '../../../../../../store/tool/toolStore';

const Cursor = () => {
  const setCursorAction = useActions(setToolAction);
  const tool = useSelector(ToolStore, (state) => state.tool.tool);

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
