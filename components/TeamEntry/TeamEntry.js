import React from 'react';
import className from 'classnames/bind';
import styles from './TeamEntry.module.scss';
import Image from 'next/image';


let members = [
    { name: "Alex Wells", title: "CEO + Co-Founder", headShot: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Alex-SPEC-400-591-ID.png'},
    { name: "Bobby Shell", title: "Co-Founder + Board Advisory", headShot: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Bobby-SPEC-400-591-ID.png'},
    { name: "Kaitlyn Lyday", title: "Creative Director", headShot: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Kaitlyn-SPEC-400-591-ID.png'},
    { name: "Dustin McCaffry", title: "Marketing Director", headShot: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Dustin-SPEC-400-591-ID.png'},
    { name: "Chloe Snow", title: "Social Media Manager", headShot: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Chloe-SPEC-400-591-ID.png'},
    { name: "Joey McClellan", title: "Social Media Manager", headShot: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Joey-SPEC-400-591-ID.png'},
    { name: "Sam Woods", title: "Designer + Developer", headShot: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Sam-SPEC-400-591-ID.png'},
    { name: "Alyssa Wells", title: "Partnerships + Public Relations", headShot: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Alyssa-SPEC-400-591-ID.png'},
];


let cx = className.bind(styles);

export default function TeamEntry({ className, teamHeadshot, headshotAlt, teamPosition, teamName, teamBio1}) {

  return (
    <div className={cx('hero_wrap')}>
      <div className={cx('card_wrap')}>
        <div className={cx('member_card')}>
          <div className={cx('member_image')}>
            <Image 
              className={cx('member_headshot')} 
              src={teamHeadshot}
              width='400px'
              height='591px'
              alt={headshotAlt}
            />
            <p className={cx('member_title')}>{teamPosition}</p>
          </div>
        </div>
      </div>
      <div className={cx('copy_wrap')}>
        <h1>{teamName}</h1>
        <p>{teamBio1}</p>
      </div>
    </div>
  );
}

