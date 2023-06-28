import React, { useEffect, useCallback } from 'react';
import className from 'classnames/bind';
import styles from './Industries.module.scss';
import useEmblaCarousel from 'embla-carousel-react';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';

let cx = className.bind(styles);

const GET_INDUSTRY_LIST = gql`
  query GetIndustryList {
    industries {
      nodes {
        title
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

useEmblaCarousel.globalOptions = {
  breakpoints: {
    '(max-width: 480px)': { align: 'start' },
  },
   loop: true }

export default function Industries({ className }) {
  const { loading, error, data } = useQuery(GET_INDUSTRY_LIST);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center' });



  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className={cx(['component', className])}>
      <div className={cx('copy')}><h2>Who We <span className={cx('headline_red')}>Serve</span></h2></div>
      <div ref={emblaRef} className={cx('cards_wrap', 'embla')}>
        <div className={cx('embla__container')}>
          {data.industries.nodes.map((industry) => (

            <div className={cx('embla__slide', 'cards')} key={industry.uri}>
              <Link href={industry.uri}>
              <a>
              <div className={cx("embla__slide__inner")}>
                <Image 
                className={cx('industry_hero')}
                src={industry.featuredImage?.node?.sourceUrl} 
                alt={industry.title} 
                width='332'
                height='283'
                />
                <div className={cx('title')}>
                  {industry.title}
                </div>
              </div>
              </a>
            </Link>
            </div>

          ))}
        </div>
      </div>
      <div className={cx('nav_btns')}>
      <button className={cx('embla__prev')} onClick={scrollPrev}>                
                <Image 
                src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Black-Form-Arrow.svg' 
                alt='Previous Slide Button'
                width='28'
                height='16'
                />
                </button>
      <button className={cx('embla__next')} onClick={scrollNext}>
                <Image 
                src='https://sbx-dev.imprint-digital.com/wp-content/uploads/2023/05/Black-Form-Arrow.svg' 
                alt='Next Slide Button'
                width='28'
                height='16'
                />
      </button>
      </div>
    </div>
  );
}