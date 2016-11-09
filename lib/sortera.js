/*

	sortera - ©2016 Hexagon <github.com/hexagon> - MIT License

	Minimal, fast and free library for creating sorted tables. 

	Supports standalone usage, AMD style require (Dojo Toolkit, RequireJS,  ScriptManJS) 
	as well as CommonJs style export.

*/

(function () {
	"use strict";

	var root = this;

	// - Helpers
	function raise (err) {
		throw new TypeError("sortera: " + err);
	}

	// - Exported function
	function sortera (table, opts) {

		// jQuery expects function (opts) while `this` is the table
		if (!opts) {
			opts = table;
			table = this[0];
		}

		// Options are optional
		opts = opts || {};

		var thead = table.querySelector("thead"),
			ths = thead.querySelectorAll("thead td, th"), // Quirky but works
			tbody = table.querySelector("tbody"),
			sortOrder = opts.sortOrder || [], // Transfered from opts.sortOrder to here by sort function
			ignore = opts.ignore || [],
			multi = opts.multi || false,
			trs,
			i,

			sort = function (colIdx, specificOrder) {

				var 
					foundIdx,

					aVal, bVal, 

					currentSortOrder, 
					colExponentCharacter,
					colDirectionCharacter,
					arrow;

				// Clear any present sort-arrows
				while((arrow = thead.querySelector(".s-arrow"))) arrow.parentNode.removeChild(arrow);

				// Should we change sorting?
				if ( colIdx !== undefined && !~ignore.indexOf(colIdx) ) {


					// Is column already sorted?
					for(i=0;i<sortOrder.length;i++) {
						if(sortOrder[i].col == colIdx) { foundIdx = i; break; }
					}

					// It was not, add a new column
					if(foundIdx === undefined) {
						foundIdx = sortOrder.length;
						sortOrder.push({col: colIdx, order: specificOrder || 1 });
					
					// Column was already sorted, change sort order
					} else {

						// Specific order
						if (specificOrder) {
							sortOrder[ foundIdx ].order = specificOrder;

						// ASC to DESC
						} else if(sortOrder[ foundIdx ].order === 1  ) {
							sortOrder[ foundIdx ].order = -1 ;

						// DESC to None
						} else {
							sortOrder.splice( foundIdx, 1 );

						}

					}

					// Only use current col, if using single column mode
					if(!multi && sortOrder.length > 1) sortOrder = [ sortOrder[ foundIdx ] ];

				}

				// Do we need to sort
				if (sortOrder.length > 0 ) {

					// Add sort-arrows
					for(i=0;i<sortOrder.length;i++) {
						colExponentCharacter = sortOrder.length > 1 ? "<sup>" + (i+1) + "</sup>" : "";
						colDirectionCharacter = sortOrder[i].order == 1 ? "&#9660" : "&#9650;";

						// Add sort arrow and character to current column
						ths[sortOrder[i].col].innerHTML += "<b class=\"s-arrow\"> " + colDirectionCharacter + colExponentCharacter +"</b>";
					}

					// Sort TRs
					trs.sort(function(a, b) {

						// Loop through each sorted column
						i = 0; while(i < sortOrder.length) {
							currentSortOrder = sortOrder[i];

							// Get the correct column
							aVal = a.children[currentSortOrder.col];
							bVal = b.children[currentSortOrder.col];

							// Use data-value if exists
							if (aVal.dataset.integer) {
								aVal = parseInt(aVal.dataset.integer);
								bVal = parseInt(bVal.dataset.integer);
							} else if (aVal.dataset.float) {
								aVal = parseFloat(aVal.dataset.float);
								bVal = parseFloat(bVal.dataset.float);
							} else if (aVal.dataset.value) {
								aVal = aVal.dataset.value;
								bVal = bVal.dataset.value;
							} else {
								aVal = aVal.textContent;
								bVal = bVal.textContent;
							}

							// Problem is solved
							if (aVal !== bVal) {
								return currentSortOrder.order * (aVal < bVal ? -1 : 1);
							}

							// Move on to next column
							i++;
						}

						// If we reached this, columns order was already OK
						return 0;

					});

					// Update DOM
					for(i=0;i < trs.length; i++) {
						tbody.appendChild(tbody.removeChild(trs[i])); 	
					} 

				}
			};

		// Optional "new" keyword
		if (!(this instanceof sortera)) {
			return new sortera(table, opts);
		}

		// Check sort order
		i = 0; while (sortOrder[i]) {
			// Warnings
			if (~ignore.indexOf(sortOrder[i].col)) raise("Initially sorted by an ignored column");

			// Errors
			if (!~sortOrder[i].col) raise("sortOrder contained invalid item");
			if (sortOrder[i].order !== -1 && sortOrder[i].order !== 1) raise("Invalid sort order: " + sortOrder[i].order);
			i++;
		};

		// Table rows not contained in tbody? Search directly under table
		if (tbody.length === 0) tbody = table;

		// Find all data rows
		trs = Array.prototype.slice.call(tbody.querySelectorAll("tr"), 0);

		// Process table headers
		for (var thIdx = 0; thIdx < ths.length; thIdx++ ) {
			// Handle click event on table headers
			ths[thIdx].addEventListener("click", function (e) {
				sort(e.target.cellIndex);
			});
			// Add .s-sortable or .s-not-sortable class
			if (!~ignore.indexOf(thIdx)) ths[thIdx].className += " s-sortable";
			else ths[thIdx].className += " s-not-sortable";
		}

		// Do initial sorting
		try {
			sort();
		} catch(e) {
			console.error(e);
		}

		// Export public functions
		return {
			sort: sort,
			clear: function () { sortOrder = []; },
			getOptions: function () { opts.sortOrder = sortOrder; return opts; }
		};
		
	};


	// - Expose

	// -> Always expose to jQuery.fn.sortera if jQuery is loaded
	if ($ && $.fn) { $.fn.sortera = sortera; }

	// -> AMD-export (Require.js, Dojo etc.)
	if (typeof define === "function" && define.amd) {
		define([], function () {
			return sortera;
		});	

	// -> CommonJs (Node.js etc.)
	} else if (typeof module != "undefined" && typeof module.exports === "object") {
		module.exports = sortera;

	// -> Regular script tag
	} else {
		root.sortera = sortera;
	}

}).call(this);