import React from 'react';
import className from 'classnames/bind';
import styles from './CaseStudies.module.scss';
import Image from 'next/image';
import Link from 'next/link';


let cx = className.bind(styles);

export default function CaseStudies({ className }) {
  return (
    <div className={cx(['component', className])}>
      <div className={cx('vid_wrap')}>
      <Link href="/">
      <a>
      <Image
        className={cx('vid_thumb')}
        src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Video-Thumb-ID.png'
        alt='Imprint Digital'
        width='544'
        height='333'
      />
      <div className={cx('vid_btn')}>SEE WHAT OUR FRACTIONAL CMOs DO</div>
      </a>
      </Link>
      </div>
      <div className={cx('copy')}>
        <h2><span className={cx('headline_red')}>Up </span>And To The Right</h2>
        <p>Your business deserves a marketing partner that can deliver. See our clients success and learn more about how we can deliver results for your organization as well.</p>
        <Link href="/"><span className={cx('cta_link')}>Success Stories</span></Link>
        </div>
    </div>

  );
}
