import { createReducer } from '@tramvai/state';
import {
  setCanvas,
  setTool,
  pushToHistory,
  incrementCurrentIndexFrame,
  decrementCurrentIndexFrame,
  setCurrentIndexFrame,
  sliceStory,
  setIsLastBrowse,
} from './events';

const initialState = {
  canvasStore: {
    canvas: null,
    browser: {
      history: [],
      currentIndexFrame: -1,
      isLastBrowse: false,
    },
  },
  tool: null,
};

export type SketchStoreState = {
  canvasStore: {
    canvas: HTMLCanvasElement | null;
    browser: {
      history: string[];
      currentIndexFrame: number;
      isLastBrowse: boolean;
    };
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

  .on(setTool, (state, tool) => {
    return { ...state, tool };
  })

  .on(pushToHistory, (state, dataUrl) => {
    return {
      ...state,
      canvasStore: {
        ...state.canvasStore,
        browser: {
          ...state.canvasStore.browser,
          history: [...state.canvasStore.browser.history, dataUrl],
        },
      },
    };
  })
  .on(incrementCurrentIndexFrame, (state) => {
    return {
      ...state,
      canvasStore: {
        ...state.canvasStore,
        browser: {
          ...state.canvasStore.browser,
          currentIndexFrame: state.canvasStore.browser.currentIndexFrame + 1,
        },
      },
    };
  })
  .on(decrementCurrentIndexFrame, (state) => {
    return {
      ...state,
      canvasStore: {
        ...state.canvasStore,
        browser: {
          ...state.canvasStore.browser,
          currentIndexFrame: state.canvasStore.browser.currentIndexFrame - 1,
        },
      },
    };
  })
  .on(setCurrentIndexFrame, (state, index) => {
    return {
      ...state,
      canvasStore: {
        ...state.canvasStore,
        browser: {
          ...state.canvasStore.browser,
          currentIndexFrame: index,
        },
      },
    };
  })
  .on(sliceStory, (state) => {
    const { browser } = state.canvasStore;

    const currentIndex = browser.currentIndexFrame;
    const newHistory = browser.history.slice(0, currentIndex + 1);

    return {
      ...state,
      canvasStore: {
        ...state.canvasStore,
        browser: {
          ...state.canvasStore.browser,
          history: newHistory,
        },
      },
    };
  })
  .on(setIsLastBrowse, (state, isLastBrowse) => {
    return {
      ...state,
      canvasStore: {
        ...state.canvasStore,
        browser: {
          ...state.canvasStore.browser,
          isLastBrowse,
        },
      },
    };
  });
