import { createReducer } from '@tramvai/state';
import { setTool } from './events';

const initialState = {
  tool: null,
};

export type ToolStoreState = {
  tool: any;
};

export const ToolStore = createReducer<ToolStoreState>('tool', initialState).on(
  setTool,
  (state, tool) => {
    return { ...state, tool };
  }
);
