// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-alerts.js.
import { name as packageName } from "meteor/jrodmanu:meteor-alerts";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-alerts - example', function (test) {
  test.equal(packageName, "meteor-alerts");
});
