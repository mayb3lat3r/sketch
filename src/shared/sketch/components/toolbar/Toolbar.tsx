import React, { useState } from 'react';

import Sidebar from '../sidebar/Sidebar';
import s from './toolbar.module.css';
import BrushButton from './tools/brush/BrushButton';
import CursorButton from './tools/cursor/CursorButton';
import EraserButton from './tools/eraser/EraserButton';
import Rect from './tools/rect/RectButton';
import UndoRedoBar from './tools/undoRedoBar/UndoRedoBar';

export type IsToolActive = { tool: string };

const Toolbar = () => {
  const [isToolActive, setIsActiveTool] = useState({
    tool: '',
  });

  return (
    <>
      <div className={s.toolbar}>
        <CursorButton setActive={setIsActiveTool} isToolActive={isToolActive} />
        <BrushButton setActive={setIsActiveTool} isToolActive={isToolActive} />
        <Rect setActive={setIsActiveTool} isToolActive={isToolActive} />
        <EraserButton />
        <UndoRedoBar />
      </div>
      <Sidebar isActive={isToolActive} />
    </>
  );
};

export default Toolbar;
