class MeteorAlerter {
  constructor() {

  }
  alert(text, time, classes) {
    Session.set("meteorAlert", {message: text});
    $(".meteorAlert").show();
  }
}

MeteorAlerts = new MeteorAlerter();
