import { query as q } from 'faunadb';

export default function InsertOne(collection, data, ops) {
  return q.Call('__insertOne', [collection, data, ops]);
}
