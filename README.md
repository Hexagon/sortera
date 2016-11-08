# sortera

[![npm version](https://badge.fury.io/js/sortera.svg)](https://badge.fury.io/js/sortera)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/83e514f5a2224cd5b9e2dd868daafef3)](https://www.codacy.com/app/robinnilsson/sortera?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Hexagon/sortera&amp;utm_campaign=Badge_Grade)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://img.shields.io/badge/license-MIT-blue.svg)


**Minimal**, dependency free and fast library for adding interactive sorting to any HTML5 table.

Supports standalone usage, AMD style require (Dojo Toolkit, RequireJS,  ScriptManJS) 
as well as CommonJs style export.


Examples
----

### Standalone usage

```javascript
// Example usage.
var element = document.getElementById('#thetable');

sortera(theTable, {
  sortOrder:    [           // sortOrder        Array of columns to sort
    {col: 1, order: 1}      // sortOrder.col    Zero indexed column index
                            // sortOrder.order  1 = Ascending, -1 = Descending
  ],    
  multi:        true,
  ignore:       [5,2]
});
```

For a full implementation and demo, see [hexagon.github.io/sortera/usage.standalone.html](https://hexagon.github.io/sortera/usage.standalone.html)


### As jQuery plugin

```javascript
// Example usage, jQuery plugin mode.
$('#thetable').sortera({
  sortOrder:    [           // sortOrder        Array of columns to sort
    {col: 1, order: 1}      // sortOrder.col    Zero indexed column index
                            // sortOrder.order  1 = Ascending, -1 = Descending
  ],    
  multi:        true,
  ignore:       [5,2]
});
```

For a full implementation and demo, see [hexagon.github.io/sortera/usage.jquery.html](https://hexagon.github.io/sortera/usage.jquery.html)


Installation
----

### cdn

Copy and paste one of the following script tags.

**Minified**

```html
<script src="//cdn.56k.guru/js/sortera/latest/sortera.min.js"></script>
```

**Full**

```html
<script src="//cdn.56k.guru/js/sortera/latest/sortera.js"></script>
```

### Manual

 * Download latest [zipball](http://github.com/Hexagon/sortera/zipball/master/)
 * Unpack
 * Grab sortera.js (or sortera.min.js) from the [lib/](/lib) folder

### Bower

```sh
bower install sortera
```

### npm

```sh
npm install sortera
```


License
----

MIT 

( Just use it, I really don't care what you do with it. )
