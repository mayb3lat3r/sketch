import { useDi } from '@tramvai/react';
import React from 'react';
import { DRAWER_TOKEN } from '~shared/drawer';
import styles from './index.module.css';

export const IndexPage = () => {
  const Drawer = useDi(DRAWER_TOKEN);
  return (
    <main className={styles.main}>
      <Drawer />
    </main>
  );
};

export default IndexPage;
