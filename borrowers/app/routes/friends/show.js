import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(model) {
      var _this = this;

      model.destroyRecord().then(function() {
        _this.transitionTo('friends.index');
      });
    }
  }
});
