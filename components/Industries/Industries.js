import React from 'react';
import className from 'classnames/bind';
import styles from './Industries.module.scss';
import Image from 'next/image';


let cx = className.bind(styles);

export default function Industries({ className }) {
  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}><h2>Who We <span className={cx('headline_red')}>Serve</span></h2></div>
    </div>

  );
}
