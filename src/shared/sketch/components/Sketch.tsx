import React from 'react';
import { useMedia } from '@tramvai/module-client-hints';
import Canvas from './canvas/Canvas';
import Toolbar from './toolbar/Toolbar';
import config from '../config';
import s from './sketch.module.css';

type SketchProps = {
  widthProp?: number;
  heightProp?: number;
};
export const Sketch = ({ widthProp, heightProp }: SketchProps) => {
  const media = useMedia();
  const { width, height } = media;

  const canvasWidth = widthProp || width || config.canvasWidth;
  const canvasHeight = heightProp || height || config.canvasHeight;

  return (
    <div className={s.sketch}>
      <Toolbar />
      <Canvas width={canvasWidth} height={canvasHeight} />
    </div>
  );
};
