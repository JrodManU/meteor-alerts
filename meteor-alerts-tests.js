// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-alerts.js.
import { name as packageName } from "meteor/jrodmanu:meteor-alerts";

Tinytest.add("MeteorAlerts is available on the client", function(test) {
  test.equal(typeof MeteorAlerts, "object");
})
