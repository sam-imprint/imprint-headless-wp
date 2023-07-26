import React from 'react';
import className from 'classnames/bind';
import styles from './TrustSection.module.scss';


let cx = className.bind(styles);

export default function TrustSection({ className }) {
  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}><h2>Why Can You <span className={cx('headline_red')}>Trust </span>Us?</h2></div>
       <script defer async src='https://cdn.trustindex.io/loader.js?446742c1713982522d061825dba'></script>
    </div>

  );
}
