import { createEvent } from '@tramvai/state';
import type { SketchStoreState } from './store';

export const setCanvas = createEvent<SketchStoreState['canvas']>('SET_CANVAS');
export const setTool = createEvent<SketchStoreState['tool']>('SET_TOOL');
