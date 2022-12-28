/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPositions = /* GraphQL */ `
  mutation CreatePositions(
    $input: CreatePositionsInput!
    $condition: ModelPositionsConditionInput
  ) {
    createPositions(input: $input, condition: $condition) {
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
export const updatePositions = /* GraphQL */ `
  mutation UpdatePositions(
    $input: UpdatePositionsInput!
    $condition: ModelPositionsConditionInput
  ) {
    updatePositions(input: $input, condition: $condition) {
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
export const deletePositions = /* GraphQL */ `
  mutation DeletePositions(
    $input: DeletePositionsInput!
    $condition: ModelPositionsConditionInput
  ) {
    deletePositions(input: $input, condition: $condition) {
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
