import React, { useEffect, useRef } from 'react';
import className from 'classnames/bind';
import Image from 'next/image';
import styles from './CaseStudy.module.scss';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

let cx = className.bind(styles);



const GET_CASE_STUDY_ARCHIVE = gql`
query GetCaseStudy {
  caseStudies {
    nodes {
      title
      uri
      caseStudies {
        caseExcerpt
        caseHeroImage {
          altText
          sourceUrl
        }
        caseMetric1
        caseMetric1Label
        caseMetric2
        caseMetric2Label
        caseMetric3
        caseMetric3Label
        caseMetric4
        caseMetric4Label
        caseWhitePaper {
          sourceUrl
        }
        companyLogo {
          sourceUrl
          altText
        }
      }
    }
  }
}
`;

export default function CaseStudy({ className }) {

  const { loading, error, data } = useQuery(GET_CASE_STUDY_ARCHIVE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;




  return (
    <div className={cx(['component', className])}>
      {data.caseStudies.nodes.map((node, index) => (
        <div className={cx('study_wrap')} >
        <div className={cx('image_wrap', `bg_scroll${index}`)} key={index}>
        <Image
        className={cx(['study_image'])}
        src={node.caseStudies.caseHeroImage?.sourceUrl}
        alt={node.caseStudies.caseHeroImage?.altText}
        width='380'
        height='640'
        />
        </div>
        <div className={cx('case_data')}>
            <div className={cx('study_hero')}>
            <Image
            className={cx(['study_logo'])}
            src={node.caseStudies.companyLogo?.sourceUrl}
            alt={node.caseStudies.companyLogo?.altText}
            width='177'
            height='108'
            />
            <div className={cx('study_copy')}>
                <h3>{node.title}</h3>
                <p>{node.caseStudies.caseExcerpt}</p>
                <Link href={node.caseStudies.caseWhitePaper?.sourceUrl}><span className={cx('cta_link')}>White Paper</span></Link>
            </div>
            </div>
            <div className={cx('study_stats')}>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{node.caseStudies.caseMetric1}</div>
                    <div className={cx('metric')}>{node.caseStudies.caseMetric1Label}</div>
                </div>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{node.caseStudies.caseMetric2}</div>
                    <div className={cx('metric')}>{node.caseStudies.caseMetric2Label}</div>
                </div>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{node.caseStudies.caseMetric3}</div>
                    <div className={cx('metric')}>{node.caseStudies.caseMetric3Label}</div>
                </div>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{node.caseStudies.caseMetric4}</div>
                    <div className={cx('metric')}>{node.caseStudies.caseMetric4Label}</div>
                </div>
            </div>
        </div>
        </div>
      ))}
    </div>

  );
}
