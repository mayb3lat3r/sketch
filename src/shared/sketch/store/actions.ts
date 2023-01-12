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
  setHistory,
  setLineWidth,
  setFillColor,
  setStrokeColor,
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

export const setLineWidthAction = declareAction({
  name: 'setLineWidth',
  async fn(width) {
    this.dispatch(setLineWidth(width));
  },
});

export const setFillColorAction = declareAction({
  name: 'setFillColor',
  async fn(color) {
    this.dispatch(setFillColor(color));
  },
});

export const setStrokeColorAction = declareAction({
  name: 'setStrokeColor',
  async fn(color) {
    this.dispatch(setStrokeColor(color));
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
    const index = Number(localStorage.getItem('currentIndexFrame'));
    localStorage.setItem('currentIndexFrame', `${index + 1}`);

    const history = JSON.parse(localStorage.getItem('history')!);

    localStorage.setItem('history', JSON.stringify([...history, dataUrl]));

    await this.dispatch(pushToHistory(dataUrl));
    await this.dispatch(incrementCurrentIndexFrame());
    await this.dispatch(setIsLastBrowse(false));
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

export const setHistoryAction = declareAction({
  name: 'setHistory',
  async fn(history) {
    this.dispatch(setHistory(history));
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
