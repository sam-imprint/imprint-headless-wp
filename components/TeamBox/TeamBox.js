import React from 'react';
import className from 'classnames/bind';
import styles from './TeamBox.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

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

const GET_TEAM_LIST = gql`
  query GetTeamList {
    team {
      nodes {
        team {
          teamHeadshot {
            altText
            sourceUrl
          }
          teamPosition
          teamName
        }
        uri
      }
    }
  }
`;

let cx = className.bind(styles);

export default function TeamBox({ className }) {

  const { loading, error, data } = useQuery(GET_TEAM_LIST);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


    const memberComponents= data.team.nodes.map((node) => (
        <div className={cx('card_wrap')}>
        <Link key={node.uri} href={node.uri}>
        <a>
        <div className={cx('member_card')}>
        <div className={cx('member_image')}>
        <Image 
          className={cx('member_headshot')} 
          src={node.team.teamHeadshot.sourceUrl}
          width='400px'
          height='591px'
          alt={node.team.teamHeadshot.altText}
          
        />
        <p className={cx('member_title')}>{node.team.teamPosition}</p>
        </div>
        <div className={cx('member_name')}>        
        <h3>{node.team.teamName}</h3>
        </div>

        </div>
        </a>
        </Link>
        </div>
));

  return (
    <div className={cx(['component', className])}>
        <div className={cx('copy')}><h2>Our <span className={cx('headline_red')}>Growth </span>Wranglers</h2></div>
        <div className={cx('members_wrap')}>
        {memberComponents}
        </div>
    </div>
  );
}

