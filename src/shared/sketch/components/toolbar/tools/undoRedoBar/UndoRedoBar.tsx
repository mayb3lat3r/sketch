import React from 'react';
import { useUndo } from '~/shared/sketch/hooks/useUndo';
import undoIcon from './img/undo.png';
import redoIcon from './img/redo.png';
import s from '../general.module.css';
import style from './undoRedoBar.module.css';

const UndoRedoBar = () => {
  const undo = useUndo();

  return (
    <div className={style.undoRedoBar}>
      <button type="button" onClick={undo} className={s.tool}>
        <img src={undoIcon} alt="undo" />
      </button>
      <button type="button" className={s.tool}>
        <img src={redoIcon} alt="redo" />
      </button>
    </div>
  );
};

export default UndoRedoBar;
