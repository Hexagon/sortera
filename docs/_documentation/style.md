---
title: Style
right_code: |
  ~~~ css
  /* Make ignored (non-sortable) column headers grayed out */
  .s-not-sortable {
      color: #999999;
  }

  /* Make sort arrows slightly smaller, and less prominent */
  .s-arrow {
      font-size: 0.8em;
  }
  ~~~
  {: title="Example stylesheet" }

---

While sortera keeps it simple, and do not change the style of your table in any way. It does add a few classes which allow _you_ to style the table according to to options.

| Class | Element | Description |
| --- | --- | --- |
| ```.s-sortable``` | ```th```, ```td``` | Sortable column headers|
| ```.s-not-sortable``` | ```th```, ```td``` | Ignored column headers |
| ```.s-arrow``` | ```b``` | The generated sort arrow |

See the example stylesheet to the right.
