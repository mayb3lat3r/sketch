import { declareAction } from '@tramvai/core';
import {
  undo,
  redo,
  setCanvas,
  setTool,
  incrementCurrentIndexFrame,
  pushToHistory,
  decrementCurrentIndexFrame,
  setCurrentIndexFrame,
  sliceStory,
  setIsLastBrowse,
} from './events';

export const setCanvasAction = declareAction({
  name: 'setCanvas',
  async fn(canvas: HTMLCanvasElement) {
    this.dispatch(setCanvas(canvas));
  },
});

export const setToolAction = declareAction({
  name: 'setTool',
  async fn(tool) {
    this.dispatch(setTool(tool));
  },
});

export const undoAction = declareAction({
  name: 'undo',
  async fn() {
    this.dispatch(undo());
  },
});

export const redoAction = declareAction({
  name: 'redo',
  async fn() {
    this.dispatch(redo());
  },
});

export const pushToHistoryAction = declareAction({
  name: 'pushToHistory',
  async fn(dataUrl) {
    this.dispatch(pushToHistory(dataUrl));
  },
});

export const incrementCurrentIndexFrameAction = declareAction({
  name: 'incrementCurrentIndexFrame',
  async fn() {
    this.dispatch(incrementCurrentIndexFrame());
  },
});

export const decrementCurrentIndexFrameAction = declareAction({
  name: 'decrementCurrentIndexFrame',
  async fn() {
    this.dispatch(decrementCurrentIndexFrame());
  },
});

export const setCurrentIndexFrameAction = declareAction({
  name: 'setCurrentIndexFrame',
  async fn(index) {
    this.dispatch(setCurrentIndexFrame(index));
  },
});

export const sliceStoryAction = declareAction({
  name: 'sliceStory',
  async fn() {
    this.dispatch(sliceStory());
  },
});

export const setIsLastBrowseAction = declareAction({
  name: 'setIsLastBrowse',
  async fn(isLastBrowse) {
    this.dispatch(setIsLastBrowse(isLastBrowse));
  },
});
