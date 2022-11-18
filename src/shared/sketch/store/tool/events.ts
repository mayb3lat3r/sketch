import { createEvent } from '@tramvai/state';
import type { ToolStoreState } from './toolStore';

export const setTool = createEvent<ToolStoreState['tool']>('SET_TOOL');
