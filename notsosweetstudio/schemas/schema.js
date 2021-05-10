// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import unit from "./simpledocs/unit";
import amount from "./objects/amount";
// We import object and document schemas
import person from "./person";
import nssreceipe from "./nssreceipe";
import cakereceipe from "./cakereceipe";
import frostingreceipe from "./frostingreceipe";
import line from "./objects/line";
import food from "./simpledocs/food";
import complexcake from "./complexcake";
import instruction from "./simpledocs/instruction";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    nssreceipe,
    // person,
    unit,
    amount,
    cakereceipe,
    frostingreceipe,
    line,
    food,
    complexcake,
    instruction,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
