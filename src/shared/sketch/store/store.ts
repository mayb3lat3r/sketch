import { createReducer } from '@tramvai/state';
import {
  popToUndo,
  pushToRedo,
  pushToUndo,
  setCanvas,
  setTool,
} from './events';

const initialState = {
  canvasStore: {
    canvas: null,
    undoList: [],
    redoList: [],
  },
  tool: null,
};

export type SketchStoreState = {
  canvasStore: {
    canvas: HTMLCanvasElement | null;
    undoList: any[];
    redoList: any[];
  };
  tool: any;
};

export const SketchStore = createReducer<SketchStoreState>(
  'sketchStore',
  initialState
)
  .on(setCanvas, (state, canvas) => {
    return { ...state, canvasStore: { ...state.canvasStore, canvas } };
  })
  .on(pushToUndo, (state, data) => {
    return {
      ...state,
      canvasStore: {
        ...state.canvasStore,
        undoList: [...state.canvasStore.undoList, data],
      },
    };
  })
  .on(popToUndo, (state) => {
    const { undoList } = state.canvasStore;

    if (undoList.length === 0) {
      return { ...state };
    }

    const updatedUndoList = state.canvasStore.undoList.splice(
      0,
      undoList.length - 1
    );

    return {
      ...state,
      canvasStore: {
        ...state.canvasStore,
        undoList: updatedUndoList,
      },
    };
  })
  .on(pushToRedo, (state, data) => {
    return {
      ...state,
      canvasStore: {
        ...state.canvasStore,
        redoList: [...state.canvasStore.redoList, data],
      },
    };
  })
  .on(setTool, (state, tool) => {
    return { ...state, tool };
  });
