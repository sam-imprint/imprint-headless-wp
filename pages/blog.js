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
  const postsPerPage = 10;
  const [cursors, setCursors] = useState([null]);
  const { loading, error, data, fetchMore } = useQuery(Page.query, {
    variables: { ...Page.variables(), first: postsPerPage, after: cursors[cursors.length - 1] },
    notifyOnNetworkStatusChange: true,
  });

  const loadMorePosts = (direction) => {
    if (direction === 'next') {
      setCursors((prev) => [...prev, data.posts.pageInfo.endCursor]);
    } else if (direction === 'prev') {
      setCursors((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    if (cursors[cursors.length - 1]) {
      fetchMore({
        variables: {
          after: cursors[cursors.length - 1],
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return fetchMoreResult;
        },
      });
    }
  }, [cursors, fetchMore]);

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
        title={siteTitle}
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
          <div className="pagination_wrap">
            <button onClick={() => loadMorePosts('prev')} disabled={cursors.length <= 1 || cursors[1] === null}>
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
