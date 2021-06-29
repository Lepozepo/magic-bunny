import { query as q } from 'faunadb';

export default {
  name: '__deleteOne',
  body: q.Query(q.Lambda((ref) => q.Call('__normalize', q.Delete(ref)))),
};
