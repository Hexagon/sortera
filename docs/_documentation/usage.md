---
title: Usage
---

It is possible to require and use sortera in a variety of ways, but the usage is very similar whichever way you choose.

#### Basic usage

```javascript
/* --- jQuery --------------------------------------------------------
   Using jQuery, the first and only parameter is options              */

$('#thetable').sortera([<options>]);

/* --- Standalone ----------------------------------------------------
   Standalone mode works slightly different, where the first parameter
   is the element, and the second parameter is the options.	          */

sortera(<element>[, <options>]);
```

---

#### Multi column sorting

By default, the user is only able to sort by one column at a time, to enable
multi-column sort, add multi: true to the options object.

```javascript
// Standalone mode
var el = document.getElementById('#sortme');
sortera(el, { multi: true });
```

Live demo at [examples/usage.standalone.html](/sortera/examples/usage.standalone.html)

---


#### Initial sort order

Without options, the table remain unchanged until the user clicks a table header. If you wan't to specify one or more default sortings, this is how to do it.

sortOrder is an array of object which specifies column (z)

```javascript
// jQuery mode
$('#sortme').sortera({
	sortOrder: [
		{ column: 2, order: -1},	// order 	-1 = ASCENDING
		{ column: 0, order: -1},	// column 	is zero-indexed
		{ column: 1, order:  1},	// order 	-1 = DESCENDING
	]
});
```

Live demo at [examples/usage.jquery.html](/sortera/examples/usage.jquery.html)

---

#### Ignore columns

If you only want a specific set of columns to be sortable, add ```ignore: []``` to the options.

ignore is a simple array of zero-indexed column indices.

```javascript
// jQuery mode
$('#sortme').sortera({
    ignore: [0,2]    // Ignore clicks on the first 
                     // and third column header
});
```

#### All at once

So, you want to make the first, second and fourth column sortable, want to be able to add secondary sortings, and sort by column four by default.

```javascript
// Standalone mode
var el = document.getElementById('#sortme');
sortera(el, {
	multi: true,
	sortOrder: [
		{ column: 3, order: -1 }
	],
	ignore: [2 ]
	
});
```

---

