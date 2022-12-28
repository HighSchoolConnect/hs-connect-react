/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePositionsInput = {
  id?: string | null,
  employerID: string,
  title: string,
  company: string,
  description: string,
  location: string,
  salary: string,
  type: string,
  pictureUrl: string,
};

export type ModelPositionsConditionInput = {
  employerID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  company?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  salary?: ModelStringInput | null,
  type?: ModelStringInput | null,
  pictureUrl?: ModelStringInput | null,
  and?: Array< ModelPositionsConditionInput | null > | null,
  or?: Array< ModelPositionsConditionInput | null > | null,
  not?: ModelPositionsConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Positions = {
  __typename: "Positions",
  id: string,
  employerID: string,
  title: string,
  company: string,
  description: string,
  location: string,
  salary: string,
  type: string,
  pictureUrl: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePositionsInput = {
  id: string,
  employerID?: string | null,
  title?: string | null,
  company?: string | null,
  description?: string | null,
  location?: string | null,
  salary?: string | null,
  type?: string | null,
  pictureUrl?: string | null,
};

export type DeletePositionsInput = {
  id: string,
};

export type ModelPositionsFilterInput = {
  id?: ModelIDInput | null,
  employerID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  company?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  salary?: ModelStringInput | null,
  type?: ModelStringInput | null,
  pictureUrl?: ModelStringInput | null,
  and?: Array< ModelPositionsFilterInput | null > | null,
  or?: Array< ModelPositionsFilterInput | null > | null,
  not?: ModelPositionsFilterInput | null,
};

export type ModelPositionsConnection = {
  __typename: "ModelPositionsConnection",
  items:  Array<Positions | null >,
  nextToken?: string | null,
};

export type CreatePositionsMutationVariables = {
  input: CreatePositionsInput,
  condition?: ModelPositionsConditionInput | null,
};

export type CreatePositionsMutation = {
  createPositions?:  {
    __typename: "Positions",
    id: string,
    employerID: string,
    title: string,
    company: string,
    description: string,
    location: string,
    salary: string,
    type: string,
    pictureUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePositionsMutationVariables = {
  input: UpdatePositionsInput,
  condition?: ModelPositionsConditionInput | null,
};

export type UpdatePositionsMutation = {
  updatePositions?:  {
    __typename: "Positions",
    id: string,
    employerID: string,
    title: string,
    company: string,
    description: string,
    location: string,
    salary: string,
    type: string,
    pictureUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePositionsMutationVariables = {
  input: DeletePositionsInput,
  condition?: ModelPositionsConditionInput | null,
};

export type DeletePositionsMutation = {
  deletePositions?:  {
    __typename: "Positions",
    id: string,
    employerID: string,
    title: string,
    company: string,
    description: string,
    location: string,
    salary: string,
    type: string,
    pictureUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPositionsQueryVariables = {
  id: string,
};

export type GetPositionsQuery = {
  getPositions?:  {
    __typename: "Positions",
    id: string,
    employerID: string,
    title: string,
    company: string,
    description: string,
    location: string,
    salary: string,
    type: string,
    pictureUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPositionsQueryVariables = {
  filter?: ModelPositionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPositionsQuery = {
  listPositions?:  {
    __typename: "ModelPositionsConnection",
    items:  Array< {
      __typename: "Positions",
      id: string,
      employerID: string,
      title: string,
      company: string,
      description: string,
      location: string,
      salary: string,
      type: string,
      pictureUrl: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePositionsSubscription = {
  onCreatePositions?:  {
    __typename: "Positions",
    id: string,
    employerID: string,
    title: string,
    company: string,
    description: string,
    location: string,
    salary: string,
    type: string,
    pictureUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePositionsSubscription = {
  onUpdatePositions?:  {
    __typename: "Positions",
    id: string,
    employerID: string,
    title: string,
    company: string,
    description: string,
    location: string,
    salary: string,
    type: string,
    pictureUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePositionsSubscription = {
  onDeletePositions?:  {
    __typename: "Positions",
    id: string,
    employerID: string,
    title: string,
    company: string,
    description: string,
    location: string,
    salary: string,
    type: string,
    pictureUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
