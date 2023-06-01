import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './ServiceHero.module.scss';
import Link from 'next/link';
import Image from 'next/image';

let cx = className.bind(styles);

export default function QuoteHero(props, {level = 'h1', className }) {

  return (
    <div className={cx(['component', className])}>
        <div className={cx('hero_img_wrap')}>
        <Image
            className={cx('hero_img')}
            src={props.heroImg}
            alt={props.heroImgAlt}
            width='355'
            height='421'
            priority='priority'
        />
        </div>
        <div className={cx('copy')}>
            <Heading level={level}>
                <span className={cx('title')}>{props.title}</span>
            </Heading>
            <p>{props.copy}</p>
            <Link href={props.linkUrl}><span className={cx('cta_link')}>{props.linkText}</span></Link>
            <div className={cx('vid_btn')}>SEE WHAT OUR FRACTIONAL CMOs DO</div>
        </div>
    </div>

  );
}
