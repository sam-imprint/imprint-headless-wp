import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './QuoteHero.module.scss';


let cx = className.bind(styles);

export default function QuoteHero({ level = 'h1', className }) {
  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}>
      <Heading level={level}>
        <span className={cx('title')}>Holla At Us</span>
      </Heading>
      <h2 className={cx('subtitle')}>Comprehensive Digital Marketing Solutions</h2>
      <p>Helping organizations establish their beachhead. Your digital marketing partner that ensures your brand thrives.</p>
      </div>
      <div className={cx('quote_box')}>
        <p className={cx('quote')}>What a wonderful team at IMPRINT! They are responsive, kind and good to their people. They hit deadlines and are always supportive of projects put in front of them. A great partner indeed!</p>
        <p className={cx('source')}>~ Christine Forster (My Big Day)</p>
      </div>
    </div>

  );
}
