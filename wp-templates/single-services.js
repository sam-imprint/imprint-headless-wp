import { gql } from '@apollo/client';

export default function SingleService(props) {
  const { title, content } = props.data.nodeByUri;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

SingleMovie.variables = ({ uri }) => {
  return { uri };
};

SingleMovie.query = gql`
  query GetServiceByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on NodeWithTitle {
        title
      }
      ... on NodeWithContentEditor {
        content
      }
    }
  }
`;