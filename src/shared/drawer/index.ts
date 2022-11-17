import { Module, provide } from '@tramvai/core';
import { createToken } from '@tinkoff/dippy';
import Drawer from './components/Drawer';

export const DRAWER_TOKEN = createToken('drawer');

@Module({
  providers: [
    provide({
      provide: DRAWER_TOKEN,
      useValue: Drawer,
    }),
  ],
})
export class DrawerModule {}
