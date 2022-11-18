import { createEvent } from '@tramvai/state';
import type { CanvasStoreState } from './canvasStore';

export const setCanvas = createEvent<CanvasStoreState['canvas']>('SET_CANVAS');
