# immodel-types

Adds type registration to immodel

## Usage

### type

Registers a type.  It may be used in two ways, at the end of a chain:

```javascript
model
  .validator(isString)
  .caster(toString)
  .type('string');
```

In which case it registers the `this` in the current chain as the type `string`.  And alternatively, with a function that takes a model and returns a type:

```javascript
model
  .type('string', function(model) {
    return model
      .validator(isString)
      .caster(toString);
  });
```

The second method should be used by plugins that are registering types.