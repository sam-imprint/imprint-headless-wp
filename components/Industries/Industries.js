import React from 'react';
import className from 'classnames/bind';
import styles from './Industries.module.scss';
import Image from 'next/image';
import Link from 'next/link';


let cx = className.bind(styles);

let industries = [
  { title: "Startups", link: "/", heroImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Startups-Thumb-CLIPPED.jpg'},
  { title: "E-Commerce", link: "/", heroImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Ecommerce-Thumb-CLIPPED.jpg'},
  { title: "Growth Stage", link: "/", heroImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Growth-Thumb-CLIPPED.jpg'},

];

export default function Industries({ className }) {
  const industryComponents= industries.map((industry) => (
    <div className={cx('cards')}>
    <Link href={industry.link}>
    <a>
    <Image
    className={cx('industry_hero')}
    src={industry.heroImage}
    alt={industry.title}
    width='332'
    height='283'
    />
    <div className={cx('title')}>{industry.title}</div>
    </a>
    </Link>
    </div>
));

  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}><h2>Who We <span className={cx('headline_red')}>Serve</span></h2></div>
      <div className={cx('cards_wrap')}>
        {industryComponents}
      </div>
    </div>

  );
}
