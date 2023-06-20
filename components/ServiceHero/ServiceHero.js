import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './ServiceHero.module.scss';
import Link from 'next/link';
import Image from 'next/image';

let cx = className.bind(styles);

export default function QuoteHero({level = 'h1', className, serviceTitle, heroCopy, heroBtnText, heroBtnUrl, image, ...props }) {

  return (
    <div className={cx(['component', className])}>
        <div className={cx('hero_img_wrap')}>
        <Image
            className={cx('hero_img')}
            src={image}
            width='355'
            height='421'
            priority='priority'
        />
        </div>
        <div className={cx('copy')}>
            <Heading level={level}>
                <span className={cx('title')}>{serviceTitle}</span>
            </Heading>
            <p>{heroCopy}</p>
            <Link href={heroBtnUrl}><span className={cx('cta_link')}>{heroBtnText}</span></Link>
            {/* <div className={cx('vid_btn')}>SEE WHAT OUR FRACTIONAL CMOs DO</div> -->*/}
        </div>
    </div>

  );
}
