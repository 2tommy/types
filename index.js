var types = {};

module.exports = function() {
  this.lookup = function(name) {
    return types[name];
  };

  this.type = function(name, fn) {
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

  this.is = function(type) {
    return !! (type && type.__isModel);
  };
  
  this.__isModel = true;
};