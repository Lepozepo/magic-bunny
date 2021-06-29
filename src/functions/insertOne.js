import { query as q } from 'faunadb';

export default {
  name: '__insertOne',
  body: q.Query(
    q.Lambda((collection, data, options) =>
      q.Call(
        '__normalize',
        q.Create(
          collection,
          q.Merge(q.If(q.IsNull(options), {}, options), {
            data,
          }),
        ),
      ),
    ),
  ),
};
