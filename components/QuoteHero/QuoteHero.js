import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './QuoteHero.module.scss';


let cx = className.bind(styles);

/* let contents = [
  { 
  title: "Holla At Us", 
  subtitle: "Comprehensive Digital Marketing Solutions", 
  copy:"Helping organizations establish their beachhead. Your digital marketing partner that ensures your brand thrives.", 
  quote:"What a wonderful team at IMPRINT! They are responsive, kind and good to their people. They hit deadlines and are always supportive of projects put in front of them. A great partner indeed!",
  source:"~ Christine Forster (My Big Day)",
}
 ]; */

export default function QuoteHero(props, {level = 'h1', className }) {

  

  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}>
      <Heading level={level}>
        <span className={cx('title')}>{props.title}</span>
      </Heading>
      <h2 className={cx('subtitle')}>{props.subtitle}</h2>
      <p>{props.copy}</p>
      </div>
      <div className={cx('quote_box')}>
        <p className={cx('quote')}>{props.quote}</p>
        <p className={cx('source')}>{props.source}</p>
      </div>
      </div>

  );
}
