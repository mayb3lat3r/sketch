import React from 'react';
import { useUndoRedo } from '~/shared/sketch/hooks/useUndoRedo';
import undoIcon from './img/undo.png';
import redoIcon from './img/redo.png';
import s from '../general.module.css';
import style from './undoRedoBar.module.css';

const UndoRedoBar = () => {
  const [undo, redo] = useUndoRedo();

  return (
    <div className={style.undoRedoBar}>
      <button type="button" onClick={undo} className={s.tool}>
        <img src={undoIcon} alt="undo" />
      </button>
      <button type="button" onClick={redo} className={s.tool}>
        <img src={redoIcon} alt="redo" />
      </button>
    </div>
  );
};

export default UndoRedoBar;
