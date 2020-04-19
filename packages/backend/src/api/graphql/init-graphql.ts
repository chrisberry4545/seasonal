import {
  ApolloServer,
  gql,
  IResolvers
} from 'apollo-server-express';
import express from 'express';
import { adminGetAllFood, adminGetOneFood, fetchAllSeasonsWithFood } from '../../fetch-data';

const typeDefs = gql`
  type Season {
    id: String
    name: String
    seasonIndex: Int
    food: [Food]
    # recipes?: IRecipe[];
  }

  type Food {
    id: String!
    name: String!
    imageUrlSmall: String
    description: String
    substituteFoodIds: [String!]
  }

  type Query {
    food(id: String): [Food]
    season(seasonIndex: Int): [Season]
  }
`;

const resolvers: IResolvers = {
  Query: {
    food: (obj, args, context) => {
      const { id } = args;
      return id
        ? adminGetOneFood(id).then((item) => [item])
        : adminGetAllFood();
    },
    season: (obj, args) => {
      return fetchAllSeasonsWithFood();
      // return getAllSeasonData();
    }
  }

  // Season: {
  //   food: (obj, args) => {
  //     console.log('getting food for seasons');
  //     return [];
  //   }
  // }
};

const server = new ApolloServer({
  resolvers,
  typeDefs
});

export const initGraphQl = (app: express.Application) =>
  server.applyMiddleware({ app });
