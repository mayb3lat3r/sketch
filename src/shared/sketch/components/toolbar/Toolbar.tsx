import React from 'react';
import s from './toolbar.module.css';
import BrushButton from './tools/brush/BrushButton';
import CursorButton from './tools/cursor/CursorButton';
import EraserButton from './tools/eraser/EraserButton';

const Toolbar = () => {
  return (
    <div className={s.toolbar}>
      <CursorButton />
      <BrushButton />
      <EraserButton />
    </div>
  );
};

export default Toolbar;
