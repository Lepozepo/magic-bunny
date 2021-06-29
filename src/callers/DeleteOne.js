import { query as q } from 'faunadb';

export default function DeleteOne(ref) {
  return q.Call('__deleteOne', ref);
}
