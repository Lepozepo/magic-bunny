import { query as q } from 'faunadb';

export default {
  name: '__normalize',
  body: q.Query(
    q.Lambda((doc) =>
      q.If(
        q.Not(q.IsNull(doc)),
        q.Merge({ _ref: q.Select('ref', doc), id: q.Select(['ref', 'id'], doc) }, q.Select(['data'], doc)),
        doc,
      ),
    ),
  ),
};
