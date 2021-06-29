import { query as q } from 'faunadb';

export default {
  name: '__updateOne',
  body: q.Query(
    q.Lambda((ref, data, ops) =>
      q.Call(
        '__normalize',
        q.Update(
          ref,
          q.Merge(q.If(q.IsNull(ops), {}, ops), {
            data,
          }),
        ),
      ),
    ),
  ),
};
