import { useActions } from '@tramvai/state';
import React from 'react';
import cn from 'classnames';
import { setLineWidthAction } from '../../store/actions';
import s from './sidebar.module.css';
import icon from './img/line-adjustment.png';
import type { IsToolActive } from '../toolbar/Toolbar';
import Color from '../toolbar/tools/color/Color';

const Sidebar = ({ isActive }: { isActive: IsToolActive }) => {
  const setLineWidth = useActions(setLineWidthAction);

  return (
    <ul
      className={cn(
        s.sidebar,
        (isActive.tool === 'brush' || isActive.tool === 'rect') && s.isActive
      )}
    >
      <li>
        <img className={s.tool} src={icon} alt="Толщина" />
        <input
          onChange={(e) => setLineWidth(e.target.value)}
          id="line-width"
          type="range"
          min={1}
          max={50}
          defaultValue={1}
        />
      </li>
      <li>
        <Color />
      </li>
    </ul>
  );
};

export default Sidebar;
