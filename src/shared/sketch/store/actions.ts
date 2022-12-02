import { declareAction } from '@tramvai/core';
import {
  popToUndo,
  pushToRedo,
  pushToUndo,
  setCanvas,
  setTool,
} from './events';

export const setCanvasAction = declareAction({
  name: 'setCanvas',
  async fn(canvas) {
    this.dispatch(setCanvas(canvas));
  },
});

export const pushToUndoAction = declareAction({
  name: 'pushToUndo',
  async fn(data) {
    this.dispatch(pushToUndo(data));
  },
});

export const popToUndoAction = declareAction({
  name: 'popToUndo',
  async fn() {
    this.dispatch(popToUndo(''));
  },
});

export const pushToRedoAction = declareAction({
  name: 'pushToRedo',
  async fn(data) {
    this.dispatch(pushToRedo(data));
  },
});

export const setToolAction = declareAction({
  name: 'setTool',
  async fn(tool) {
    this.dispatch(setTool(tool));
  },
});
