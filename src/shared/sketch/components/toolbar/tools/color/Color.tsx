import { useActions } from '@tramvai/state';
import React from 'react';
import {
  setFillColorAction,
  setStrokeColorAction,
} from '../../../../store/actions';
import icon from './img/color-circle.png';
import s from './color.module.css';
import sidebar from '../../../sidebar/sidebar.module.css';

const Color = () => {
  const [setFillColor, setStrokeColor] = useActions([
    setFillColorAction,
    setStrokeColorAction,
  ]);

  const changeColor = (e: any) => {
    setFillColor(e.target.value);
    setStrokeColor(e.target.value);
  };
  return (
    <>
      <img className={sidebar.tool} src={icon} alt="" />
      <div className={s.colorContainer}>
        <input
          className={s.color}
          type="color"
          onChange={(e) => changeColor(e)}
        />
      </div>
    </>
  );
};

export default Color;
