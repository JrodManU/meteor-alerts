import { Template } from "meteor/templating";
import { Session } from "meteor/session";

Template.meteorAlert.helpers({
  alert: function() {
    return Session.get("meteorAlert");
  }
})
