$(document).ready(function() {
  // events
  bookings.on("dataload", function() {
    console.debug("bookings loaded");
  });
  bookings.loadData();
  
  // check join
  project = projects.get(1);
  activity = activities.get(1);
  
  console.debug(project.getActivities()[0] == activity);
  console.debug(activity.getProjects()[0] == project);
});
$.ajax({
  type: "GET",
  url: "http://mobile.zeira.ch/activities/",
  beforeSend: function(req) {
    req.setRequestHeader('Authorization', 'Basic John:secret');
  },
  username: "John",
  password: "secret",
  success: function(txt) {
    console.debug(txt);
  }
});
