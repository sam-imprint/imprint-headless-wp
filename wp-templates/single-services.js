import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  EntryHeader,
  NavigationMenu,
  ContentWrapper,
  SEO,
  OurWork,
  CtaButton,
  HornCards,
  Industries,
  HireUs,
  AboutUs,
  ServiceHero,
} from '../components';

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }


  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];
  const { title, content } = props.data.service;
  const { serviceTitle, heroCopy, heroBtnText, heroBtnUrl, heroimage, case1, bulletsTitleH2, bulletsList } = props.data.service.servicesOptions;

  return (
    <>
      <SEO
        title={siteTitle}
        description={siteDescription}
      />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <>
          <EntryHeader
            title={title}
          />
          <Container>
            <ServiceHero
              serviceTitle={serviceTitle}
              image={heroimage?.node}
              heroCopy={heroCopy}
              heroBtnText={heroBtnText}
              heroBtnUrl={heroBtnUrl}
            />
            <HireUs />
            <CtaButton />
            <HornCards />
            <AboutUs />
            <Industries />
          </Container>
        </>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetService(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    service(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      id
        servicesOptions {
          heroimage {
            altText
            uri
          }
          case1 {
            altText
            uri
          }
          case2 {
            altText
            uri
          }
          case3 {
            altText
            uri
          }
          bulletsList
          bulletsTitleH2
          card1
          card2
          card3
          heroBtnText
          heroBtnUrl
          heroCopy
          hornsBtnText
          hornsBtnUrl
          hornsH2
          serviceTitle
          whitePaperBtnText
          whitePaperBtnUrl
          whitePaperCopy
          whoWeAreBtnCopy
          whitePaperTitleH3
          whoWeAreBtnText
          whoWeAreCopy
          whoWeAreH2
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

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview,
  };
};
