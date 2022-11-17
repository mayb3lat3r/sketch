import { createApp } from '@tramvai/core';
import { CommonModule } from '@tramvai/module-common';
import { SpaRouterModule } from '@tramvai/module-router';
import { RenderModule } from '@tramvai/module-render';
import { ServerModule } from '@tramvai/module-server';
import { ErrorInterceptorModule } from '@tramvai/module-error-interceptor';
import { SeoModule } from '@tramvai/module-seo';
import { COMBINE_REDUCERS } from '@tramvai/module-common';
import {
  RENDER_SLOTS,
  ResourceType,
  ResourceSlot,
} from '@tramvai/tokens-render';
import { DrawerModule } from '~shared/drawer';
import { ClientHintsModule } from '@tramvai/module-client-hints';
import { ToolStore } from './store/tool/toolStore';
import { CanvasStore } from './store/canvas/canvasStore';

createApp({
  name: 'sketch',
  modules: [
    CommonModule,
    SpaRouterModule,
    RenderModule.forRoot({ mode: 'strict' }),
    SeoModule,
    ServerModule,
    ErrorInterceptorModule,
    DrawerModule,
    ClientHintsModule,
  ],
  providers: [
    {
      provide: COMBINE_REDUCERS,
      multi: true,
      useValue: [CanvasStore, ToolStore],
    },
    {
      provide: RENDER_SLOTS,
      multi: true,
      useValue: {
        type: ResourceType.asIs,
        slot: ResourceSlot.HEAD_META,
        payload:
          '<meta name="viewport" content="width=device-width, initial-scale=1">',
      },
    },
  ],
});
