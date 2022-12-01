import { declareAction } from '@tramvai/core';
import { setCanvas, setTool } from './events';

export const setCanvasAction = declareAction({
  name: 'setCanvas',
  async fn(canvas) {
    this.dispatch(setCanvas(canvas));
  },
});

export const setToolAction = declareAction({
  name: 'setTool',
  async fn(tool) {
    this.dispatch(setTool(tool));
  },
});
