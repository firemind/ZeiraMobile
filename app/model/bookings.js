Booking = Backbone.Model.extend({
  active: false,
  getActivity: function() {
    activities.where({id: this.activity_id})[0];
  },
  
  getProject: function() {
    projects.where({id: this.project_id})[0];
  },

  close: function(end_time) {
    if(active) {
      this.set(end_time);
    }
  }
});

Booking.openSession = function(data) {
  booking = new Booking(data);
  booking.active = true;
};

Bookings = Collection.extend({
  model: Project,
  collectionName: "bookings",

  create_new: function(date, start_time, end_time, project_id, activity_id, comment) {
    data = {
      date: date,
      start_time: start_time,
      end_time: end_time,
      project_id: project_id,
      activity_id: activity_id,
      comment: comment
    };
    if(data["end_time"] == "") {
      Booking.openSession(data);
    }
    booking = new Booking(data);
    var jsonData = JSON.stringify({booking: booking.toJSON()});

    $.ajax({
      type: "POST",
      url: this.url,
      contentType: "application/json",
      data: jsonData,
      username: settings.get("username"),
      password: settings.get("password")
    });
  }
});

bookings = new Bookings();
bookings.loadData();

bookings.create_new("10/10/2000", "12:00", "13:00", 1, 1, "asdf");
