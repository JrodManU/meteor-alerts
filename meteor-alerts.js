class MeteorAlerter {
  constructor() {
    this.queue = [];
    this.waitToCheckQueue = 200;
  }

  alert(text, time, classes) {
    if(this.alreadyAlerting()) {
      this.addToQueue(text, time, classes);
    } else {
      this.handleAlert(text, time, classes);
    }
  }

  handleAlert(text, time, classes) {
    Session.set("meteorAlert", {message: text});
    $(".meteorAlert").removeClass();
    $(".meteorAlert").addClass("meteorAlert meteorAlertVisible");
    for(var i = 0; i < classes.length; i++) {
      $(".meteorAlert").addClass(classes[i]);
    }
    var that = this;
    setTimeout(function() {
      that.hideAlert();
    }, time);
  }

  hideAlert() {
    $(".meteorAlert").removeClass("meteorAlertVisible");
    $(".meteorAlert").addClass("meteorAlertHidden");
    var that = this;
    setTimeout(function() {
      that.checkQueue();
    }, this.waitToCheckQueue);
  }

  alreadyAlerting() {
    return $(".meteorAlert").hasClass("meteorAlertVisible");
  }

  addToQueue(text, time, classes) {
    this.queue.push({text: text, time: time, classes: classes});
  }

  checkQueue() {
    if(this.queue.length > 0) {
      this.alert(this.queue[0].text, this.queue[0].time, this.queue[0].classes);
      this.queue.shift();
    }
  }
}

MeteorAlerts = new MeteorAlerter();
