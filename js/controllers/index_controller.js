App.IndexController = Ember.ArrayController.extend({
	actions: {
		deleteStickie: function(id){
			this.store.find('stickie', id).then(function(rec){
				rec.deleteRecord();
				rec.save();
			})
		},
		saveOnEdit: function(id){
			var target = '#'+id;
			//sconsole.log(target);
			var textContent = $(target).text();
			console.log(textContent.length);
			this.store.find('stickie', id).then(function(rec){
				rec.set('content', textContent);
				rec.save();
			})
		}
	}
})
