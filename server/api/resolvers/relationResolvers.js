const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
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
