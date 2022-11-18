import React from 'react';
import { Sketch } from '~/shared/sketch';
import s from './index.module.css';

const sketchProps = {
  widthProp: 600,
  heightProp: 600,
};

export const IndexPage = () => {
  return (
    <main className={s.main}>
      <Sketch {...sketchProps} />
    </main>
  );
};

export default IndexPage;
