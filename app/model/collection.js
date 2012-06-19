Collection = Backbone.Collection.extend({
  loadData: function() {
    this.url = settings.getUrl(this.collectionName),
    console.debug(this.url);
    this.fetch({error: this.loadStorage, success: this.saveStorage});
  },

  loadStorage: function(collection) {
    data = JSONStorage.get(collection.collectionName);
    collection.add(data);
    collection.trigger("dataload");
  },

  saveStorage: function() {
    JSONStorage.set(this.collectionName, this);
    collection.trigger("dataload");
  }
});
