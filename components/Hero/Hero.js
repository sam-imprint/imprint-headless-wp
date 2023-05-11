import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './Hero.module.scss';
import Image from 'next/image';


let cx = className.bind(styles);

export default function Hero({ level = 'h1', children, className }) {
  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}>
      <Heading level={level}>
        <span className={cx('title')}>Digital Marketing Solutions That Work</span>
      </Heading>
      <p className={cx('subtitle')}>Stop getting burned by digital marketing companies. Your digital marketing partner that ensures your brand thrives.</p>
      </div>
      <Image
        className={cx('hero_bull')}
        src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/BULL-ROCKET.gif'
        alt='For the Moon!'
        width='480'
        height='480'
        priority='priority'
      />
      {children}
    </div>

  );
}
