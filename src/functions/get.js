import { query as q } from 'faunadb';

export default {
  name: '__normalizedGet',
  body: q.Query(
    q.Lambda((ref) =>
      q.Let(
        {
          doc: q.If(q.If(q.Or(q.IsSet(ref), q.IsRef(ref)), q.Exists(ref), q.Not(q.IsNull(ref))), q.Get(ref), null),
        },
        q.Call('__normalize', q.Var('doc')),
      ),
    ),
  ),
};
