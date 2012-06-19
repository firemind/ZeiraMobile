Collection = Backbone.Collection.extend({
  loadData: function() {
    this.url = settings.getUrl(this.collectionName),
    this.fetch({error: this.loadStorage, success: this.saveStorage});
    this.loadStorage(this);
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
