import React from 'react';
import className from 'classnames/bind';
import styles from './Services.module.scss';
import Link from 'next/link';
import Image from 'next/image';

let cx = className.bind(styles);

let services = [
        { name: "Fractional CMO", title: "C-Level Marketing", subtitle: "Marketing Vision & Execution", bgImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Fractional-CMO-BG-Light.jpg'},
        { name: "Paid Ads", title: "High ROI Funnels", subtitle: "Paid Strategy", bgImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Fractional-CMO-BG-Light.jpg'},
        { name: "SEO", title: "Quality Content", subtitle: "Sustainable Revenue", bgImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Fractional-CMO-BG-Light.jpg'},
        { name: "Brand Identity", title: "Shape Your Brand", subtitle: "Distinguish Yourself", bgImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Fractional-CMO-BG-Light.jpg'},
        { name: "Web Design", title: "More Than Looks", subtitle: "Create UX That Wins 🧡's", bgImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Fractional-CMO-BG-Light.jpg'},
        { name: "Content", title: "The Foundation", subtitle: "Written, Video & More", bgImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Fractional-CMO-BG-Light.jpg'},
        { name: "Email Marketing", title: "Engage & Promote", subtitle: "And Educate Customers", bgImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Fractional-CMO-BG-Light.jpg'},
        { name: "Bitcoin", title: "Service BTC ORGS", subtitle: "Crypto Is A Scam", bgImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Fractional-CMO-BG-Light.jpg'},
        { name: "Social Media", title: "Super Hero Landing", subtitle: "We've Got Good Knees", bgImage: 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Fractional-CMO-BG-Light.jpg'},
    ];


export default function Services({ className }) {
const serviceComponents= services.map((service) => (
        <div className={cx('service_card')}>
        <div className={cx('bg_image')}>
        <Image 
          src={service.bgImage}
          width='640px'
          height='640px'
          alt='BG Image'
        />
        </div>
        <h3>{service.title}</h3>
        <p>{service.subtitle}</p>
        <Link href="/">
            <a>
                <button>{service.name}</button>
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
