import { gql } from '@apollo/client';
import Image from 'next/image';
export default function HeroImage({
  image,
  width,
  height,
  className,
  priority,
  layout,
  ...props
}) {
  const src = image?.sourceUrl;
  const { altText } = image || '';

  width = width ? width : image?.mediaDetails?.width;
  height = height ? height : image?.mediaDetails?.height;
  layout = layout ?? 'fill';

  return src && width && height ? (
    <figure className={className}>
      <Image
        src={src}
        alt={altText}
        layout={layout}
        width="200px"
        height="200px"
        priority={priority}
        {...props}
      />
    </figure>
  ) : null;
}

FeaturedImage.fragments = {
  entry: gql`
    fragment FeaturedImageFragment on NodeWithFeaturedImage {
      featuredImage {
        node {
          id
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  `,
};
