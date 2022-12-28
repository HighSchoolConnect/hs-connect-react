/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPositions = /* GraphQL */ `
  query GetPositions($id: ID!) {
    getPositions(id: $id) {
      id
      employerID
      title
      company
      description
      location
      salary
      type
      pictureUrl
      createdAt
      updatedAt
    }
  }
`;
export const listPositions = /* GraphQL */ `
  query ListPositions(
    $filter: ModelPositionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPositions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        employerID
        title
        company
        description
        location
        salary
        type
        pictureUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
