import faunadb, { query as q } from 'faunadb';
import * as fns from './functions';
import * as m from './callers';

export async function installFunctions(props) {
  const { secret = process.env.FAUNADB_SECRET } = props || {};

  const db = new faunadb.Client({
    secret,
  });

  await db.query(
    q.Do.apply(
      this,
      Object.entries(fns).map(([, fn]) =>
        q.If(q.Exists(q.Function(fn.name)), q.Update(q.Function(fn.name), fn), q.CreateFunction(fn)),
      ),
    ),
  );
}

const FN_HISTORY = ['__deleteOne', '__normalizedGet', '__insertOne', '__normalize', '__updateOne', '__upsertOne'];

export async function uninstallFunctions(props) {
  const { secret = process.env.FAUNADB_SECRET } = props || {};

  const db = new faunadb.Client({
    secret,
  });

  await db.query(
    q.Do.apply(
      this,
      FN_HISTORY.map((fnName) => q.If(q.Exists(q.Function(fnName)), q.Delete(q.Function(fnName)), null)),
    ),
  );
}

export default m;
