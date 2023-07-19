import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './HireUs.module.scss';
import Link from 'next/link';
import Image from 'next/image';

let cx = className.bind(styles);

export default function HireUs({
    level = 'h2', 
    className, 
    case3, 
    bulletsTitleH2, 
    bulletsList, 
    whitePaperTitleH3,
    whitePaperCopy,
    whitePaperBtnUrl,
    whitePaperBtnText,
    ...props }) {

  return (
    <div className={cx(['component', className])}>
        <div className={cx('hire_copy')}>
        <Heading level={level}>
            <span className={cx('title')} dangerouslySetInnerHTML={{ __html: bulletsTitleH2 ?? '' }} />
        </Heading>
        <div className={cx('hire_list')} dangerouslySetInnerHTML={{ __html: bulletsList ?? '' }} />
        </div>

        <div className={cx('wp_wrap')}>
            <div className={cx('wp_hero')}>
            <Image
                className={cx('wp_logo')}
                src={case3}
                alt={props.altText}
                width='158'
                height='96'
                priority='priority'
            />
            <h3>{whitePaperTitleH3}</h3>
            </div>
            <div className={cx('wp_copy')}>
                <p>{whitePaperCopy}</p>
                <Link href={whitePaperBtnUrl}><span className={cx('cta_link')}>{whitePaperBtnText}</span></Link>
            </div>
        </div>
    </div>

  );
}
