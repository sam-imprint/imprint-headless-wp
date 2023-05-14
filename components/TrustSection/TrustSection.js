import React from 'react';
import className from 'classnames/bind';
import styles from './TrustSection.module.scss';
import Image from 'next/image';


let cx = className.bind(styles);

export default function TrustSection({ className }) {
  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}><h2>Why Can You <span className={cx('headline_red')}>Trust </span>Us?</h2></div>
      <Image
        className={cx('hero_bull')}
        src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/trustpilot-testimonial-carousel-placeholder.png'
        alt='5 Stars!'
        width='1163'
        height='297'
      />
    </div>

  );
}
