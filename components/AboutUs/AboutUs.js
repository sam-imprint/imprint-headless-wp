import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './AboutUs.module.scss';
import Link from 'next/link';
import Image from 'next/image';

let cx = className.bind(styles);

export default function AboutUs(props, {level = 'h2', className }) {

  return (
    <div className={cx(['component', className])}>
        <Image
                className={cx('about_img')}
                src="https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/ID-Icon-Video-Color.gif"
                alt="Meet Imprint!"
                width='158'
                height='96'
                priority='priority'
            />
        <div className={cx('about_copy')}>
        <Heading level={level}>
                <span className={cx('title')}>Who <span className={cx('accent')}>We</span> Are</span>
        </Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem purus, volutpat id ligula pellentesque, finibus semper erat. In vel neque non urna iaculis lacinia.</p>
        <Link href="/"><span className={cx('cta_link')}>Meet Imprint</span></Link>
        </div>
    </div>

  );
}
