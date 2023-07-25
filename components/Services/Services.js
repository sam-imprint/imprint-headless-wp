import React from 'react';
import className from 'classnames/bind';
import styles from './Services.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';

let cx = className.bind(styles);


const GET_SERVICE_ARCHIVE = gql`
query GetServiceArchive {
  services {
    nodes {
      title
      uri
      servicesOptions {
        serviceTitle
        cardTagline
        cardDescriptor
        cardBackground {
          altText
          sourceUrl
        }
      }
    }
  }
}
`;

export default function Services({ className, ...props }) {
  const { loading, error, data } = useQuery(GET_SERVICE_ARCHIVE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const serviceComponents = data.services.nodes.map(({ title, uri, servicesOptions }) => (
    <Link href={uri} key={uri}>
    <a>
    <div className={cx('service_card')} key={uri}>
      <div className={cx('bg_image')}>
        <Image 
          src={servicesOptions.cardBackground.sourceUrl}
          width='640px'
          height='640px'
          alt={servicesOptions.cardBackground.altText}
        />
      </div>
      <h3>{servicesOptions.cardDescriptor}</h3>
      <p>{servicesOptions.cardTagline}</p>
      <button>{title}</button>

    </div>
    </a>
      </Link>
  ));

  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}><h2>Services</h2></div>
      <div className={cx('services_wrap')}>
        {serviceComponents}
      </div>
    </div>
  );
}