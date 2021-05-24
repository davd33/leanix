import { gql } from "./graphql.service";

export const getPublicReposQuery = gql`{
  search(query: "is:public", type: REPOSITORY, first: 50) {
    repositoryCount
    pageInfo {
      endCursor
      startCursor
    }
    edges {
      node {
        ... on Repository {
          name
          id
          url
        }
      }
    }
  }
}`;
