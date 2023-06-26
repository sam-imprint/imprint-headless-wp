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
    <div className={cx('service_card')} key={uri}>
      <div className={cx('bg_image')}>
        <Image 
          src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Fractional-CMO-BG-Light.jpg'
          width='640px'
          height='640px'
          alt='BG Image'
        />
      </div>
      <h3>{title}</h3>

      <Link href={uri}>
        <a>
          <button>{title}</button>
        </a>
      </Link>
    </div>
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