import { gql } from '@apollo/client';

export default function ServiceData(props) {
  const { title, content} = props.data.nodeByUri;
  const { whoWeAreH2 } = props.data.nodeByUri.servicesOptions;

  return (
    <>
      <h1>{ title }</h1>
      <h2>{ whoWeAreH2 }</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

ServiceData.variables = ({ uri }) => {
  return { uri };
};

ServiceData.query = gql`
query GetServiceByUri($uri: String!) {
  nodeByUri(uri: $uri) {
    ... on NodeWithTitle {
      title
    }
    ... on NodeWithContentEditor {
      content
    }
    ... on Service {
      id
      servicesOptions {
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
  }
}
`;

