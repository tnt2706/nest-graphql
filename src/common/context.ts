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

  const signature = { roles: ['admin'] };

  return {
    pubsub,
    signature,
    token: req.headers['access-token'],
  };
}
