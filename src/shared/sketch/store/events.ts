import { createEvent } from '@tramvai/state';
import type { SketchStoreState } from './store';

export const setCanvas =
  createEvent<SketchStoreState['canvasStore']['canvas']>('SET_CANVAS');

export const pushToUndo =
  createEvent<SketchStoreState['canvasStore']['undoList']>('PUSH_TO_UNDO');

export const popToUndo = createEvent('POP_TO_UNDO');

export const pushToRedo =
  createEvent<SketchStoreState['canvasStore']['redoList']>('pushToRedo');

export const setTool = createEvent<SketchStoreState['tool']>('SET_TOOL');
