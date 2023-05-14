import React from 'react';
import className from 'classnames/bind';
import styles from './HornCards.module.scss';
import Link from 'next/link';


let cx = className.bind(styles);

export default function HornCards({ level = 'h1', children, className }) {
  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}><h2>Faster Growth with a <span className={cx('headline_red')}>Fractional </span>Chief Marketing Officer</h2></div>
    <div className={cx('cards_wrap')}>
      <div id="card1" className={cx('cards')}>
        <h3>Highly Sought Experts</h3>
        <p>A Fractional CMO’s MO is to take your business’ marketing by the horns and run with it. Our client’s enjoy the luxury of having experienced and competent marketing direction without the pains of in-house infrastructure.</p>
      </div>
      <div id="card2" className={cx('cards')}>
        <h3>All-American Team of Marketers</h3>
        <p>Imagine hiring a Fractional CMO that has an all-American team of marketers behind them. Our team is full of the best copywriters, SEO specialists, Ad Managers, Social Media Managers, Graphic Designers, Web Developers, and Email Marketing Managers.</p>
      </div>
      <div id="card3" className={cx('cards')}>
        <h3>Entrepreneur Mindset</h3>
        <p>The team we’ve built has been hand-selected for people that have worked with hundreds of businesses so we can understand the pain you are facing and the things you are thinking about and meet you where you are.</p>
      </div>
    </div>
    <Link href="/"><span className={cx('cta_link')}>Hire Your New CMO</span></Link>
    </div>

  );
}
