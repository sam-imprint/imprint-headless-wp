import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './OurWork.module.scss';
import Link from 'next/link';
import Image from 'next/image';

let cx = className.bind(styles);

export default function OurWork({level = 'h2', className, case1, case1Alt, case2, case2Alt, case3, case3Alt, ...props}) {

  return (
    <div className={cx(['component', className])}>
            <Heading level={level}>
                <span className={cx('title')}>Our Work</span>
            </Heading>
        <div className={cx('logo_wrap')}>
        <Image
            className={cx('case_logo')}
            src={case1}
            alt={case1Alt}
            width='158'
            height='96'
            priority='priority'
        />
        <Image
            className={cx('case_logo')}
            src={case2}
            alt={case2Alt}
            width='158'
            height='96'
            priority='priority'
        />
        <Image
            className={cx('case_logo')}
            src={case3}
            alt={case3Alt}
            width='158'
            height='96'
            priority='priority'
        />
        </div>
    </div>

  );
}
