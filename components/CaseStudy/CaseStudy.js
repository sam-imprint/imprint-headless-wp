import React, { useEffect, useRef } from 'react';
import className from 'classnames/bind';
import Image from 'next/image';
import styles from './CaseStudy.module.scss';
import Link from 'next/link';

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

  const { loading, error, data } = useQuery(GET_CASE_STUDY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

    const backgroundImagesRef = useRef(Array(studies.length).fill('https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/case-study-bg.svg'));

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const handleScroll = () => {
            const { scrollY } = window;
            for (let i = 0; i < studies.length; i++) {
              const element = document.querySelector(`.bg_scroll${i}`);
              if (element) {
                const rect = element.getBoundingClientRect();
                const elemTop = window.scrollY + rect.top; // element's position relative to the document
                const elemCenter = elemTop + rect.height / 2; // center of the element relative to the document
                const isVisible = elemCenter < scrollY + window.innerHeight/2 && elemCenter > scrollY - window.innerHeight/2;
                const newImage = isVisible ? (scrollY > 50 ? 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/06/case-study-bg-scroll-alt.svg' : 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/case-study-bg.svg') : 'https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/case-study-bg.svg';
                if (newImage !== backgroundImagesRef.current[i]) {
                  backgroundImagesRef.current[i] = newImage;
                  element.style.backgroundImage = `url(${newImage})`;
                }
              }
            }
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }
      }, []); // empty dependency array to add the listener only once

  return (
    <div className={cx(['component', className])}>
      {data.caseStudies.nodes.map((node, index) => (
        <div className={cx('study_wrap')} >
        <div className={cx('image_wrap', `bg_scroll${index}`)} key={index}>
        <Image
        className={cx(['study_image'])}
        src={node.caseHeroImage.sourceUrl}
        alt={node.caseHeroImage.altText}
        width='380'
        height='640'
        />
        </div>
        <div className={cx('case_data')}>
            <div className={cx('study_hero')}>
            <Image
            className={cx(['study_logo'])}
            src={node.companyLogo.sourceUrl}
            alt={node.companyLogo.altText}
            width='177'
            height='108'
            />
            <div className={cx('study_copy')}>
                <h3>{node.title}</h3>
                <p>{node.caseExcerpt}</p>
                <Link href={node.caseWhitePaper.sourceUrl}><span className={cx('cta_link')}>White Paper</span></Link>
            </div>
            </div>
            <div className={cx('study_stats')}>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{node.caseMetric1}</div>
                    <div className={cx('metric')}>{node.caseMetric1Label}</div>
                </div>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{node.caseMetric2}</div>
                    <div className={cx('metric')}>{node.caseMetric2Label}</div>
                </div>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{node.caseMetric3}</div>
                    <div className={cx('metric')}>{node.caseMetric3Label}</div>
                </div>
                <div className={cx('stat')}>
                    <div className={cx('data')}>{node.caseMetric4}</div>
                    <div className={cx('metric')}>{node.caseMetric4Label}</div>
                </div>
            </div>
        </div>
        </div>
      ))}
    </div>

  );
}
