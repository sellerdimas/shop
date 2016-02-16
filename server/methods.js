Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://postmaster%40sandboxfe4e63216a764ccab0a852a35d014554.mailgun.org:409e153296eacf781b73df952d87e3ba@smtp.mailgun.org:587';

  });






Meteor.methods({
  sendEmail: function (email, name, text) {
    check([email, name, text], [String]);

    this.unblock();

    Email.send({
      to: 'script.spirits@gmail.com',
      from: email,
      subject: 'Hi my name is ' + name + ' my email: ' + email,
      text: text
    });
    return 1;
  },
  addVisitor: function(user){
    var date = new Date();
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    if( !FullDay.findOne({ipAddress: user.ipAddress}) ){
        FullDay.insert({
            ipAddress: user.ipAddress,
            browser: user.userAgent.browser.family,
            os: user.userAgent.os.family,
            date: date.toLocaleString("en-US", options),
            referer: user.referer || 'undefined'
        });
    }

  },
  Orders: function (value) {
    var date = new Date();
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    Orders.insert({
            header: value.header,
            firma: value.firma,
            price: value.price,
            size: value.size,
            color: value.color,
            name: value.name,
            number: value.number,
            date: date.toLocaleString("en-US", options),
        });
    
  }
});
var second = 1000 * 3600;
Meteor.setInterval(function () {
    var now = new Date();
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'EET',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    var countVisitors = FullDay.find().count();
    FullDay.remove({});
    CountVisits.insert({
            count: countVisitors,
            date: date.toLocaleString("en-US", options)
        });
}, second);


Meteor.publish('preload',function () {
  return NewCollections.find();
  
});




/*Meteor.startup(function() {
  if(!Preload.findOne()){
    for(var i = 1; i < 10; i++){
        Preload.insert({
          load: 1
        });
    }
  }                                                                                                                                                                                                                                                                                   

});*/