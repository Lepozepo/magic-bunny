import { query as q } from 'faunadb';

export default function UpdateOne(ref, data = {}, ops) {
  return q.Call('__updateOne', [ref, data, ops]);
}
