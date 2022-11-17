import React from 'react';
import { useMedia } from '@tramvai/module-client-hints';
import Canvas from './canvas/Canvas';
import Toolbar from './toolbar/Toolbar';
import config from '../../config';

const Drawer = () => {
  const media = useMedia();

  const { width, height } = media;

  return (
    <div className="drawer">
      <Toolbar />
      <Canvas
        width={width || config.canvasWidth}
        height={height || config.canvasHeight}
      />
    </div>
  );
};

export default Drawer;
