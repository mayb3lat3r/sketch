import { createEvent } from '@tramvai/state';
import type { SketchStoreState } from './store';

export const undo = createEvent<void>('UNDO');
export const redo = createEvent<void>('REDO');
export const pushToHistory = createEvent<string>('PUSH_TO_HISTORY');

export const setCanvas = createEvent<HTMLCanvasElement>('SET_CANVAS');

export const setTool = createEvent<SketchStoreState['tool']>('SET_TOOL');

export const incrementCurrentIndexFrame = createEvent<void>(
  'INCREMENT_CURRENT_INDEX_FRAME'
);

export const decrementCurrentIndexFrame = createEvent<void>(
  'DECREMENT_CURRENT_INDEX_FRAME'
);

export const setCurrentIndexFrame = createEvent<number>(
  'SET_CURRENT_INDEX_FRAME'
);

export const setHistory = createEvent<string[]>('SET_HISTORY');

export const sliceStory = createEvent<void>('SLICE_STORY');

export const setIsLastBrowse = createEvent<boolean>('SET_IS_LAST_BROWSE');

export const setLineWidth = createEvent<number>('SET_LINE_WIDTH');
export const setFillColor = createEvent<string>('SET_FILL_COLOR');
export const setStrokeColor = createEvent<string>('SET_STROKE_COLOR');
