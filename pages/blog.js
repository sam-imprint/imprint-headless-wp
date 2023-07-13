import { gql, useQuery } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  ArchiveHeader,
  Footer,
  Main,
  Container,
  NavigationMenu,
  SEO,
  FeaturedImage,
  Excerpt,
} from '../components';
import { getNextStaticProps } from '@faustwp/core';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Page(props) {
  const [cursor, setCursor] = useState(null);
  const { loading, error, data, fetchMore } = useQuery(Page.query, {
    variables: { ...Page.variables(), first: 10, after: cursor },
    notifyOnNetworkStatusChange: true,
  });

  const loadMorePosts = (direction) => {
    let newCursor;
    if (direction === 'next') {
      newCursor = data.posts.pageInfo.endCursor;
    } else if (direction === 'prev') {
      newCursor = data.posts.pageInfo.startCursor;
    }

    setCursor(newCursor);
  };

  useEffect(() => {
    if (cursor) {
      fetchMore({
        variables: {
          after: cursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return fetchMoreResult;
        },
      });
    }
  }, [cursor, fetchMore]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const title = props.title || 'Default Title';

  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const primaryMenu = data.headerMenuItems.nodes ?? [];
  const footerMenu = data.footerMenuItems.nodes ?? [];

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={title}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <ArchiveHeader title='Blog'/>
        <Container>
          {data.posts.nodes.map((post) => (
            <Excerpt
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author?.node.name}
              uri={post.uri}
              featuredImage={post.featuredImage?.node}
            />
          ))}
          <div>
            <button onClick={() => loadMorePosts('prev')} disabled={!data.posts.pageInfo.hasPreviousPage}>
              Previous
            </button>
            <button onClick={() => loadMorePosts('next')} disabled={!data.posts.pageInfo.hasNextPage}>
              Next
            </button>
          </div>
        </Container>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Page.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${FeaturedImage.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $first: Int
    $after: String
  ) {
    posts(first: $first, after: $after) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        title
        excerpt
        date
        uri
        ...FeaturedImageFragment
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Page.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    first: 10,
    after: null,
  };
};

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {Page, props: {title: 'File Page Example'}});
}
