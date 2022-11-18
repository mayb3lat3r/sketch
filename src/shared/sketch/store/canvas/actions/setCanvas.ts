import { declareAction } from '@tramvai/core';
import { setCanvas } from '../events';

export const setCanvasAction = declareAction({
  name: 'setCanvas',
  async fn(canvas) {
    this.dispatch(setCanvas(canvas));
  },
});
