import { query as q } from 'faunadb';

export default {
  name: '__upsertOne',
  body: q.Query(
    q.Lambda((collection, query, data, options) =>
      q.Let(
        {
          doc: q.Call('__normalizedGet', query),
        },
        q.If(
          q.IsNull(q.Var('doc')),
          q.Call('__insertOne', [collection, data, options]),
          q.Call('__updateOne', [q.Select('_ref', q.Var('doc')), data, options]),
        ),
      ),
    ),
  ),
};
