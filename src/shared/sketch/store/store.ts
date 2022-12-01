import { createReducer } from '@tramvai/state';
import { setCanvas, setTool } from './events';

const initialState = {
  canvas: null,
  tool: null,
};

export type SketchStoreState = {
  canvas: HTMLCanvasElement | null;
  tool: any;
};

export const SketchStore = createReducer<SketchStoreState>(
  'sketchStore',
  initialState
)
  .on(setCanvas, (state, canvas) => {
    return { ...state, canvas };
  })
  .on(setTool, (state, tool) => {
    return { ...state, tool };
  });
