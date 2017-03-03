class MeteorAlerter {
  constructor() {

  }

  alert(text, time, classes) {
    if(this.alreadyAlerting()) {
      if(!this.checkIfSame(text)) {
        this.hideAlert($("#meteorAlert").text());
        this.handleAlert(text, time, classes);
      }
    } else {
      this.handleAlert(text, time, classes);
    }
  }

  handleAlert(text, time, classes) {
    Session.set("meteorAlert", {message: text});
    $("#meteorAlert").removeClass();
    $("#meteorAlert").addClass("meteorAlert meteorAlertVisible");
    for(var i = 0; i < classes.length; i++) {
      $("#meteorAlert").addClass(classes[i]);
    }
    var that = this;
    setTimeout(function() {
      that.hideAlert(text);
    }, time);
  }

  hideAlert(text) {
    if(this.checkIfSame(text)) {
      $("#meteorAlert").removeClass("meteorAlertVisible");
      $("#meteorAlert").addClass("meteorAlertHidden");
    }
  }

  alreadyAlerting() {
    return $("#meteorAlert").hasClass("meteorAlertVisible");
  }

  checkIfSame(text) {
    return $("#meteorAlert").text().trim() === text;
  }
}

MeteorAlerts = new MeteorAlerter();
