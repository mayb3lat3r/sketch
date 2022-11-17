import { useActions } from '@tramvai/state';
import type { MutableRefObject } from 'react';
import React, { useEffect, useRef } from 'react';
import { setToolAction } from '../../../../store/tool/actions/setTool';
import { setCanvasAction } from '../../../../store/canvas/actions/setCanvas';
import s from './canvas.module.css';
// import Brush from '../toolbar/tools/brush/Brush';
// import { ToolStore } from '../../../../store/tool/toolStore';

type CanvasProps = {
  width: number;
  height: number;
};

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  // const tool = useSelector(ToolStore, (state) => state.tool);
  const [setCanvas] = useActions([setCanvasAction, setToolAction]);

  useEffect(() => {
    setCanvas(canvasRef.current); // TODO: фикс дабл рендера
  }, [setCanvas]);

  return (
    <div className={s.canvasWrapper}>
      <canvas width={width} height={height} ref={canvasRef} />
    </div>
  );
};

export default Canvas;
