import { declareAction } from '@tramvai/core';
import { setTool } from '../events';

export const setToolAction = declareAction({
  name: 'setTool',
  async fn(tool) {
    this.dispatch(setTool(tool));
  },
});
