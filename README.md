# Magic Bunny
## Helper functions for FaunaDB
This is a work in progress

### How to use?
- Install the package with `npm i magic-bunny`
- Import and run `installFunctions` (`uninstallFunctions` is also provided)
```js
import { installFunctions } from 'magic-bunny';
installFunctions({ secret }).then(() => console.log('functions installed!')).catch(() => console.log('functions failed to install!'))
```
- Use provided functions from the bunny
```js
import m from 'magic-bunny';

db.query(m.Get(someRef))
```

### Available Functions
#### Normalize(doc)
Returns the data field on a document and extends it with _ref

```js
const normalizeObject = {
  _ref: Ref(Collection('stuff'), '1'),
  ...data,
}
```

#### Get(setOrRef)
Returns a single normalized document or null if nothing is found

#### InsertOne(collectionOrRef, data, ops)
Creates a document on the collection and returns a normalized version of it. The ops parameter accepts all other fields that can be used at the root level of the Create function

#### UpdateOne(ref, data, ops)
Updates a document on the collection and returns a normalized version of it. The ops parameter accepts all other fields that can be used at the root level of the Update function

#### DeleteOne(ref)
Removes a document and returns the removed document normalized

#### UpsertOne(collection, query, data, ops)
Creates a document as defined by data or updates a document found via query with data
