import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './OurWork.module.scss';
import Link from 'next/link';
import Image from 'next/image';

let cx = className.bind(styles);

export default function OurWork(props, {level = 'h2', className }) {

  return (
    <div className={cx(['component', className])}>
            <Heading level={level}>
                <span className={cx('title')}>Our Work</span>
            </Heading>
        <div className={cx('logo_wrap')}>
        <Image
            className={cx('case_logo')}
            src={props.caseLogo}
            alt={props.caseLogoAlt}
            width='158'
            height='96'
            priority='priority'
        />
        <Image
            className={cx('case_logo')}
            src={props.caseLogo2}
            alt={props.caseLogo2Alt}
            width='158'
            height='96'
            priority='priority'
        />
        <Image
            className={cx('case_logo')}
            src={props.caseLogo3}
            alt={props.caseLogo3Alt}
            width='158'
            height='96'
            priority='priority'
        />
        </div>
    </div>

  );
}
