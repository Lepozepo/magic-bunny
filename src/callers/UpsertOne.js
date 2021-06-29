import { query as q } from 'faunadb';

export default function UpsertOne(collection, query, data, options) {
  return q.Call('__upsertOne', [collection, query, data, options]);
}
