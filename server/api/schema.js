const { gql } = require("apollo-server-express");

/**
 *  @TODO: Boomtown Schema
 *
 * Define the types in your GraphQL schema here.
 * For each type, remove the `_: Boolean` placeholder and add the
 * fields as directed. Be sure to finish writing resolvers for all types
 * and any relational fields, where required.
 *
 * We will create the custom Date scalar together.
 */
module.exports = gql`
  # scalar Date

  type Item {
    id: ID!
    title: String!
    imageurl: String
    description: String!
    itemowner: User!
    tags: [Tags]
    created: Date!
    borrower: User
  }

  type User {
    _: Boolean
  }

  type Tag {
    _: Boolean
  }

  type AuthPayload {
    _: Boolean
  }

  input AssignedTag {
    _: Boolean
  }

  input AssignedBorrower {
    _: Boolean
  }

  input NewItemInput {
    _: Boolean
  }

  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  type Mutation {
    addItem: Boolean
  }
`;

// Define your schema!

// The Item type has the following fields:

// id (its type is ID and it's required)
// title (its type String and it's required)
// imageurl (its type is String)
// description (its type String and it's required)
// itemowner (its type is User and it's required)
// tags (its type is a list of Tags)
// created (its type is the custom Date scalar and it's required)
// borrower (its type is User)
// The User type has the following fields:

// id (its type is ID and it's required)
// email (its type is String and it's required)
// fullname (its type is String and it's required)
// bio (its type is String)
// items (its type is a list of Items)
// borrowed (its type is a list of Items)
// The Tag type has the following fields:

// id (its type is ID and it's required)
// title (its type is String and it's required)
// The AuthPayload type has the following fields:

// token (its type is String)
// user (its type is User)
// The AssignedTag input has the following fields:

// id (its type is ID and it's required)
// title (its type is String and it's required)
// The AssignedBorrower input has the following fields:

// id (its type is ID and it's required)
// The NewItemInput input has the following fields:

// title (its type is String and it's required)
// description (its type is String)
// tags (its type is a list of AssignedTags and it's required)
// The addItem mutation has the following variables and returns an Item:

// item (its type is NewItemInput and it's required)
