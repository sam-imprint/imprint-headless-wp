import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './TeamHero.module.scss';
import Image from 'next/image';


let cx = className.bind(styles);

export default function TeamHero({ className }) {
  return (
    <div className={cx(['component', className])}>
      <Image 
                className={cx(['hero_img'])}
                src="https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Team-Hero.png"
                alt="Imprint Digital"
                width="1193"
                height="729"
                priority="priority"
                />
    </div>
  );
}
