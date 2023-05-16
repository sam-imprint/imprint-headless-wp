import React from 'react';
import className from 'classnames/bind';
import Image from 'next/image';
import styles from './ContactForm.module.scss';
import Link from 'next/link';
import { CtaButton } from '../CtaButton';

let cx = className.bind(styles);

export default function ContactForm({ className }) {
  return (
    <div className={cx(['component', className])}>
        <h2>We want to help awesome people and businesses.</h2>
        <p>Let's Get Started!</p>
        <form action="/send-data-here" method="post">
            <div className={cx(['field_row'])}><label for="name">Name</label><input type="text" id="name" name="name" /></div>
            <div className={cx(['field_row'])}><label for="email">Email</label><input type="text" id="email" name="email" /></div>
            <div className={cx(['field_row'])}><label for="business">Business Name</label><input type="text" id="business" name="business" /></div>
            <div className={cx(['field_row'])}><label for="phone">Phone</label><input type="text" id="phone" name="phone" /></div>
            <button type="submit">Get Your Free Consultation</button>
        </form>
    </div>

  );
}
