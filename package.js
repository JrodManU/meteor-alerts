Package.describe({
  name: "jrodmanu:meteor-alerts",
  version: "0.0.3",
  // Brief, one-line summary of the package.
  summary: "Display simple alerts at the top of the page",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/JrodManU/meteor-alerts/tree/master",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.4");
  api.use("ecmascript");
  api.use("templating");
  api.use("session");
  api.use("jquery");
  api.addFiles([
    "meteor-alerts.js",
    "body.html",
    "meteorAlert/meteorAlert.html",
    "meteorAlert/meteorAlert.js"
  ], "client");
  api.export("MeteorAlerts");
});

Package.onTest(function(api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("jrodmanu:meteor-alerts");
  api.mainModule("meteor-alerts-tests.js");
});
