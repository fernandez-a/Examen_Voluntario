import {ApolloError, ApolloServer } from 'apollo-server'
import {typeDefs} from "./schema"
import {Query,Character,Episode,Location} from "./resolvers/queries"
const saltRounds = 10;
const resolvers = {
    Query,
    Character,
    Episode,
    Location

  };
  const run = async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
  
    });
    server.listen(4000).then(() => {
      console.log(`🚀  Server ready 4000`);
      });
  }
  try{
    run()
  }catch (e) {
      console.error(e);
  }