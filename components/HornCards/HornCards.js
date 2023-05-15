import React from 'react';
import className from 'classnames/bind';
import styles from './HornCards.module.scss';
import Link from 'next/link';


let cx = className.bind(styles);

let cards = [
        { title: "Highly Sought Experts", copy: "A Fractional CMO’s MO is to take your business’ marketing by the horns and run with it. Our client’s enjoy the luxury of having experienced and competent marketing direction without the pains of in-house infrastructure." },
        { title: "All-American Team of Marketers", copy: "Imagine hiring a Fractional CMO that has an all-American team of marketers behind them. Our team is full of the best copywriters, SEO specialists, Ad Managers, Social Media Managers, Graphic Designers, Web Developers, and Email Marketing Managers." },
        { title: "Entrepreneur Mindset", copy: "The team we’ve built has been hand-selected for people that have worked with hundreds of businesses so we can understand the pain you are facing and the things you are thinking about and meet you where you are." },
      
    ];

export default function HornCards({ className }) {
    const cardsComponents= cards.map((card) => (
      <div className={cx('cards')}>
        <h3>{card.title}</h3>
        <p>{card.copy}</p>
      </div>
    ));
    return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}><h2>Faster Growth with a <span className={cx('headline_red')}>Fractional </span>Chief Marketing Officer</h2></div>
    <div className={cx('cards_wrap')}>
      {cardsComponents}
      </div>
    <Link href="/"><span className={cx('cta_link')}>Hire Your New CMO</span></Link>
    </div>
  );
}
