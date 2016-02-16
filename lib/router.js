Router.configure({
  loadingTemplate: 'loading'
});
Router.route('main',{
  path:'/',
  template: 'main',
  waitOn: function() {
    return Meteor.subscribe('preload'); 
  },
  onBeforeAction: function () {
      var userVisitor = Session.get('currentVisit');
       Meteor.call('addVisitor',userVisitor, function (err, res) {
            if(err){
                aler(err);
            }
        });
       this.next();
  }
});
Router.onBeforeAction('loading');