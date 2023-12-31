import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();

export function reqContext({ req }) {
  const { query } = req?.body || {};
  if (!query) {
    return { pubsub };
  }

  if (query && query.match(/IntrospectionQuery/)) {
    return {};
  }

  return {
    pubsub,
    token: req.headers['access-token'],
  };
}
