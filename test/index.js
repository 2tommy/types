var assert = require('assert');
var immodel = require('immodel');

describe('types', function() {
  var model;
  
  beforeEach(function() {
    model = immodel.use(require('..'));
  });
  
  describe('.is', function() {
    it('should work', function() {
      assert(model.is(model))
      assert(model.is(model.use()));
      assert(! model.is({}));
    });
  });
  
  describe('.type / .lookup', function() {
    it('should work', function() {
      model.type('test');
      assert(model.lookup('test') === model);
    });
    
    it('should allow custom constructors', function() {
      var fn = function() {};
            
      model.type('test', function() {
        return fn;
      });
      
      assert(model.lookup('test') === fn);
    });
  });
});