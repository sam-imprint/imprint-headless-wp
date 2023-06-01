import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './HireUs.module.scss';
import Link from 'next/link';
import Image from 'next/image';

let cx = className.bind(styles);

export default function HireUs(props, {level = 'h2', className }) {

  return (
    <div className={cx(['component', className])}>
        <div className={cx('hire_copy')}>
        <Heading level={level}>
                <span className={cx('title')}>Why Hiring A Fractional CMO Is Worth The Investment</span>
        </Heading>
        <ul  className={cx('hire_list')}>
            <li>Marketing Leadership and Expertise</li>
            <li>Don't Have to Hire Internally</li>
            <li>Save Your Time and Budget</li>
        </ul>
        </div>

        <div className={cx('wp_wrap')}>
            <div className={cx('wp_hero')}>
            <Image
                className={cx('wp_logo')}
                src={props.wpLogo}
                alt={props.wpLogoAlt}
                width='158'
                height='96'
                priority='priority'
            />
            </div>
            <div className={cx('wp_copy')}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ex a consequat posuere. Curabitur rhoncus ante nec ultrices elementum. Donec sit amet enim elit. In pulvinar sit amet urna et lobortis.</p>
                <Link href="/"><span className={cx('cta_link')}>White Paper</span></Link>
            </div>
        </div>
    </div>

  );
}
