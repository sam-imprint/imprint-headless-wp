import React from 'react';
import className from 'classnames/bind';
import Image from 'next/image';
import styles from './CaseStudy.module.scss';
import Link from 'next/link';

let cx = className.bind(styles);

let studies = [
    {image:"https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/flowers-cut-SPEC-380-640.png",
    logo:"https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/earles-logo-SPEC-177-108.png",
    title:"Earle's Florist & Gifts",
    copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ex a consequat posuere.",
    link:"/",
    data:"+20.42%",
    metric:"End of Year Revenue",
    },
    {image:"https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/vintage-willows-flower-dress-cutout-SPEC-380-640.png",
    logo:"https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/vintage-willows-SPEC-177-108.png",
    title:"Earle's Florist & Gifts",
    copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ex a consequat posuere.",
    link:"/",
    data:"+20.42%",
    metric:"End of Year Revenue",
    },
    {image:"https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/noco-jj-instructor-SPEC-380-640.png",
    logo:"https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/noco-jj-logo-SPEC-177-108.png",
    title:"Earle's Florist & Gifts",
    copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ex a consequat posuere.",
    link:"/",
    data:"+20.42%",
    metric:"End of Year Revenue",
    }
]

export default function CaseStudy({ className }) {

    const studyComponents= studies.map((study) => (
    <div className={cx('study_wrap')}>
        <div className={cx('image_wrap')}>
        <Image
        className={cx(['study_image'])}
        src={study.image}
        alt='Our Work'
        width='380'
        height='640'
        />
        </div>
        <div className={cx('case_data')}>
            <div className={cx('study_hero')}>
            <Image
            className={cx(['study_logo'])}
            src={study.logo}
            alt='Find us!'
            width='177'
            height='108'
            />
            <div className={cx('study_copy')}>
                <h3>{study.title}</h3>
                <p>{study.copy}</p>
                <Link href={study.link}><span className={cx('cta_link')}>White Paper</span></Link>
            </div>
            </div>
            <div className={cx('study_stats')}>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{study.data}</div>
                    <div className={cx('metric')}>{study.metric}</div>
                </div>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{study.data}</div>
                    <div className={cx('metric')}>{study.metric}</div>
                </div>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{study.data}</div>
                    <div className={cx('metric')}>{study.metric}</div>
                </div>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{study.data}</div>
                    <div className={cx('metric')}>{study.metric}</div>
                </div>
            </div>
        </div>
        </div>
    ));

  return (
    <div className={cx(['component', className])}>
        {studyComponents}
    </div>

  );
}
