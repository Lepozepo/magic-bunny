import { query as q } from 'faunadb';

export default function Normalize(doc) {
  return q.Call('__normalize', doc);
}
