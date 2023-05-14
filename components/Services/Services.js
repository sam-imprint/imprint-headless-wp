import React from 'react';
import className from 'classnames/bind';
import styles from './Services.module.scss';
import Link from 'next/link';

let cx = className.bind(styles);

let services = [
        { name: "Fractional CMO", title: "C-Level Marketing", subtitle: "Marketing Vision & Execution"},
        { name: "Paid Ads", title: "High ROI Funnels", subtitle: "Paid Strategy"},
        { name: "SEO", title: "Quality Content", subtitle: "Sustainable Revenue"},
        { name: "Brand Identity", title: "Shape Your Brand", subtitle: "Distinguish Yourself"},
        { name: "Web Design", title: "More Than Looks", subtitle: "Create UX That Wins 🧡's"},
        { name: "Content", title: "The Foundation", subtitle: "Written, Video & More"},
        { name: "Email Marketing", title: "Engage & Promote", subtitle: "And Educate Customers"},
        { name: "Bitcoin", title: "Service BTC ORGS", subtitle: "Crypto Is A Scam"},
        { name: "Social Media", title: "Super Hero Landing", subtitle: "We've Got Good Knees"},
    ];


export default function Services({ className }) {
const serviceComponents= services.map((service) => (
        <div className={cx('service_card')}>
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
