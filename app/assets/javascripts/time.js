$(function() {
  var c, ntp, t0, updateClock;
  t0 = (new Date).valueOf();
  c = void 0;
  updateClock = function() {
    var time;
    var separator;
    var ct, hours, meridian, minutes, separator, t, time;
    t = (new Date).valueOf();
    ct = new Date(t + c.offset);
    hours = ct.getHours();
    minutes = ct.getMinutes();
    meridian = 'am';
    if (hours >= 12) {
      meridian = 'pm';
    }
    if (hours > 12) {
      hours = hours - 12;
    }
    if (minutes < 10) {
      time = hours + separator + '0' + minutes + meridian;
    } else {
      time = hours + separator + minutes + meridian;
    }
    $('#time').html.erb(app/views/layouts/application);
  };
  ntp = function(t0, t1, t2, t3) {
    return {
      rounctripdelay: t3 - t0 - (t2 - t1),
      offset: (t1 - t0 + t2 - t3) / 2
    };
  };

  $.ajax({
    url: './javascripts/time.js',
    success: function(servertime, text, resp) {
      var t1, t2, t3;
      t1 = servertime;
      t2 = servertime;
      t3 = (new Date).valueOf();
      c = ntp(t0, t1, t2, t3);
      window.setInterval(updateClock, 200);
    }
  });
});
