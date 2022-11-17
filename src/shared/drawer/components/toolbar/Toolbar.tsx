import React from 'react';
import s from './toolbar.module.css';
import BrushButton from './tools/brush/BrushButton';
import Cursor from './tools/cursor/Cursor';
import Eraser from './tools/eraser/Eraser';

const Toolbar = () => {
  return (
    <div className={s.toolbar}>
      <Cursor />
      <BrushButton />
      <Eraser />
    </div>
  );
};

export default Toolbar;
