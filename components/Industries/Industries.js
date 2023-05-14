import React from 'react';
import className from 'classnames/bind';
import styles from './Industries.module.scss';
import Image from 'next/image';
import Link from 'next/link';


let cx = className.bind(styles);

export default function Industries({ className }) {
  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}><h2>Who We <span className={cx('headline_red')}>Serve</span></h2></div>
      <div className={cx('cards_wrap')}>
        <div className={cx('cards')}>
        <Link href="/">
        <a>
        <Image
        className={cx('industry_hero')}
        src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Startups-Thumb-CLIPPED.jpg'
        alt='Startups'
        width='332'
        height='283'
        />
        <div className={cx('title')}>Startups</div>
        </a>
        </Link>
        </div>
        <div className={cx('cards')}>
        <Link href="/">
        <a>
        <Image
        className={cx('industry_hero')}
        src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Ecommerce-Thumb-CLIPPED.jpg'
        alt='E-Commerce'
        width='332'
        height='283'
        />
        <div className={cx('title')}>E-Commerce</div>
        </a>
        </Link>
        </div>
        <div className={cx('cards')}>
        <Link href="/">
        <a>
        <Image
        className={cx('industry_hero')}
        src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Growth-Thumb-CLIPPED.jpg'
        alt='Growth Stage'
        width='332'
        height='283'
        />
        <div className={cx('title')}>Growth Stage</div>
        </a>
        </Link>
        </div>
      </div>
    </div>

  );
}
