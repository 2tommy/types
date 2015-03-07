var types = {};

module.exports = function(model) {
  model.lookup = function(name) {
    return types[name];
  };

  model.type = function(name, fn) {
    var type = this;
    
    if(arguments.length === 2) {
      var old = this.mutable;
      this.mutable = false;
      type = fn(this);
      this.mutable = old;
    }
    
    types[name] = type;
    return this;
  };

  model.is = function(type) {
    return !! (type && type.__isModel);
  };
  
  model.__isModel = true;
};