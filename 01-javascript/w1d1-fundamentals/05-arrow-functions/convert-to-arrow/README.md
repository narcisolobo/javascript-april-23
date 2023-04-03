# Convert To Arrow

In the end-of-day assignment for today (week 1 day 1),
the last task says:

>Connect the EventListener `setBackgroundColorById` to the paragraph in the HTML.

This directive asks us to call the `setBackgroundColorById` function on the last paragraph in the HTML.

This paragraph already has an `onmouseover` event listener, but you can add another. Add an `onclick` event listener to this paragraph.

```html
<p
  onmouseover="mouseOverFunction(this)"
  onclick="setBackgroundColorById()">
  Another task: This should be another feature. I want to click
  anywhere in this paragraph tag and I want to be able to change
  the background color to whatever is in this input:
  <input type="text" />.
</p>
```
However, the `setBackgroundColorById` function requires an `id` and a `color` to be passed in as arguments:

```js
const setBackgroundColorById = (id, color) =>
  document.getElementById(id).style = "background-color: " + color;
```

Therefore, we must also add an id to the paragraph in order to pass it in as an argument to our function call.

```html
<p
  id="myParagraph"
  onmouseover="mouseOverFunction(this)"
  onclick="setBackgroundColorById('myParagraph')"
>
  <!-- paragraph contents removed for brevity -->
</p>
```
Now all that's left is to supply a value for the `color` parameter. We can use the `getValueFromId` function for that.
```html
<p
  id="myParagraph"
  onmouseover="mouseOverFunction(this)"
  onclick="setBackgroundColorById('myParagraph', getValueFromId())"
>
  <!-- paragraph contents removed for brevity -->
</p>
```
But we see that the `getValueFromId` function also has a parameter that we did not supply an argument for.
```js
const getValueFromId = (id) =>
  return document.getElementById(id).value;
```
The element we need the value from is the `<input>` element in the paragraph. It does not have an id, so we must supply one.
```html
<input id="myInput" type="text" />
```
Now we can use that `id` in our function call:
```html
<p
  id="myParagraph"
  onmouseover="mouseOverFunction(this)"
  onclick="setBackgroundColorById('myParagraph', getValueFromId('myInput'))"
>
  <!-- paragraph contents removed for brevity -->
</p>
```
Now we should be able to type a color into the input, click on the paragraph, and the paragraph's color should change.

A working edited version can be found at [this link](index.html).
