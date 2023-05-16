import React from 'react';
import className from 'classnames/bind';
import Image from 'next/image';
import styles from './ContactBody.module.scss';
import Link from 'next/link';
import { ContactForm } from '/components';

let cx = className.bind(styles);

export default function ContactBody({ level = 'h1', className }) {
  return (
    <div className={cx(['component', className])}>
        <div className={cx(['info_wrap'])}>
        <Image
        className={cx(['directions_map'])}
        src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/ID-MAP-Placeholder-1.jpg'
        alt='Find us!'
        width='430'
        height='591'
        />
        <div className={cx(['contact'])}>
        <Image
        className={cx(['id_logo'])}
        src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/ImprintDigital_Logo_Color1.png'
        alt='Imprint Logo'
        width='503'
        height='98'
        />
        <Link className={cx(['phone'])} href="tel:+19705184491">970 518-4491</Link>
        <Link  className={cx(['address'])} href="/">815 14th St SW, Loveland, CO 80537</Link>
        </div>
        </div>
        <div className={cx(['form_wrap'])}>
                <ContactForm />
        </div>
    </div>

  );
}
