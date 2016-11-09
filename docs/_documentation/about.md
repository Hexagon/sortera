---
title: Sortera
right_code: |
  ~~~ html
  <table class="sort-me">
    <!--  td for headers is supported,
          but only if the row is wrapped 
          in thead                    -->
    <thead>
      <tr>
        <td>Table Header</td>
      </tr>
    </thead>
    <tr>
      <td>Content</td>
    </tr> 
  </table>
  ~~~
  {: title="Example table 1" }

  ~~~ html
  <table class="sort-me">
    <!--  When using th, you do not
          _need_ to have a thead-clause.
          But it's always recommended.    -->
    <tr>
      <th>Table Header</th>
    </tr>
    <tr>
      <td>Content</td>
    </tr>
  </table>
  ~~~
  {: title="Example table 2" }

---

Sortera is a standalone, minimalistic yet powerful, javascript library that makes any HTML-table interactively sortable.

**Highligts**

 * Small footprint
 * Highly optimized code
 * Not _relying_ on any third party libraries of any kind
 * Multi column sorting
 * Adapts to the application, supporting the following techiques
    * Stand-alone usage
    * Registers itself as a [jQuery](https://jquery.com/)-plugin if jQuery is present
    * [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition) export ([Dojo Toolkit](https://dojotoolkit.org), [RequireJS](http://requirejs.org/),  ScriptManJS)
    * [CommonJS](https://en.wikipedia.org/wiki/CommonJS)-style export

Sortera works by attaching events to the table headers of an existing table, hence your table need to have a ```html <thead> </thead>``` section, or ```<th>``` instead of ```<td>``` for column headers. See example tables to the rights.