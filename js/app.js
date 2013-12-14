var App = Ember.Application.create();

/*App.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter
});



App.Store = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});*/


App.LSAdapter = DS.LSAdapter.extend({
    namespace: 'app_namespace'
});

App.ApplicationAdapter = DS.LSAdapter;