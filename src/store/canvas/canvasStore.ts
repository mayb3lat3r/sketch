import { createReducer } from '@tramvai/state';
import { setCanvas } from './events';

const CANVAS_STORE_NAME = 'canvas';

const initialState = {
  canvas: null,
};

export type CanvasStoreState = {
  canvas: HTMLCanvasElement | null;
};

export const CanvasStore = createReducer<CanvasStoreState>(
  CANVAS_STORE_NAME,
  initialState
).on(setCanvas, (state, canvas) => {
  return { ...state, canvas };
});
