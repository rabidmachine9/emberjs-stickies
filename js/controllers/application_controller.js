App.ApplicationController = Ember.ArrayController.extend({
	actions: {
		newStickie: function(){
	  	var newStickie = this.store.createRecord('stickie', {
		  	content: 'Lorem ipsum'
			});
			newStickie.save();
		}
	}
})
