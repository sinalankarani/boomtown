const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    /**
     *  The User GraphQL type has two fields that are not present in the
     *  user table in Postgres: items and borrowed.
     *
     *  According to our GraphQL schema, these fields should return a list of
     *  Items (GraphQL type) the user has lent (items) and borrowed (borrowed).
     *
     */
    async items({ id }, args, { pgResource }, info) {
      try {
        const items = await pgResource.getItemsForUser(id);
        return items;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrowed({ id }, args, { pgResource }, info) {
      try {
        const borrowed = await pgResource.getBorrowedItemsForUser(id);
        return borrowed || null;
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  },

  Item: {
    /**
     *  @TODO: Advanced resolvers
     *
     *  The Item GraphQL type has two fields that are not present in the
     *  Items table in Postgres: itemowner, tags and borrower.
     *
     * According to our GraphQL schema, the itemowner and borrower should return
     * a User (GraphQL type) and tags should return a list of Tags (GraphQL type)
     *
     */
    async itemowner({ ownerid }, args, { pgResource }, info) {
      try {
        const itemowner = await pgResource.getUserById(ownerid);
        return itemowner;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async tags({ id }, args, { pgResource }, info) {
      try {
        const tags = await pgResource.getTagsForItem(id);
        return tags;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrower({ borrowerid }, args, { pgResource }, info) {
      try {
        const borrower = await pgResource.getUserById(borrowerid);
        return borrower || null;
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  }
};

module.exports = relationResolvers;
