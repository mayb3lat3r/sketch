import { ClientHintsModule } from '@tramvai/module-client-hints';
import { Module } from '@tramvai/core';
import { COMBINE_REDUCERS } from '@tramvai/tokens-common';
import { SketchStore } from './store/store';

export * from './components/Sketch';

// TODO: сохранение в сессию (при перезагрузке остается) travelaviabook -> saveToSessionStorage()
// TODO: подумать над конфигурацией модуля

// ?: Раз это модуль, возможно, следует создать для него package.json

@Module({
  imports: [ClientHintsModule],
  providers: [
    {
      provide: COMBINE_REDUCERS,
      multi: false,
      useValue: [SketchStore],
    },
  ],
})
export class SketchModule {}
