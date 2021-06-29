import { query as q } from 'faunadb';

export default function Get(ref) {
  return q.Call('__normalizedGet', ref);
}
