---
path: "/frontend/6"
date: '2019-03-04'
title: "Frontend Focus 06 - HTML"
description: 
image: ''
tags: ['웹개발', '프론트엔드', 'html']
---
> understanding general front-end development and HTML

- [reference](https://internetingishard.com/)

### the Languages that run the Web
- __HTML__: adding __meaning__ to raw content by marking it up
- __CSS__: __formatting__ that marked up content
- __JavaScript__: making that content and formatting __interactive__

#### Web Development
- mastering HTML, CSS, and JavaScript is only a __prerequisite__ for becoming a professional web developer
- there are a bunch of other practical skills that you need to run a website (__setting up environments to build and deploy a website__):
    - organizing HTML into reusable templates, standing up a web server, moving files from your local computer to your web server, version control, setting a domain name to point to your server

### HTML
- HTML markup should provide __semantic__ information about your content (not presentational information)
- it should define the __structure__ of your document, leaving its appearance to CSS
    - `<em>` > < i > & `<strong>` > < b >: bcuz emphasized text can be displayed in all sorts of ways (not just italicized but maybe in different font, color, size, etc.)
    - < br/> should not be abused; each one should convey __meaning__; not to add a bunch of space (CSS should do this)
- HTML5 attempted to create a __clear separation between a document's structure and appearance__

#### language and encoding
- `html lang='en'`: to define the __language of the document's content__
- `meta charset='UTF-8'`: defines __how the character letters are rendered__

#### HTML entity
special character that can't be represented as plain text in an HTML document
- __reserved character__: <, >, and &
    - represented by `&lt;`, `&gt;`, `&amp;` respectively
- __characters not on the keyboard__: begin w/ `&` and end with `;` to interpret as a symbol of something
    - [more information](https://dev.w3.org/html5/html-author/charref)

#### Images (`<img>`)
- Image Formats
    1. __JPG__: _photos and images_ w/ a lot of gradients in them
        - designed for handling large color palettes w/o exorbitantly increasing file size, doesn't allow transparent pixels.
    2. __GIF__: _simple animations_
    3. __PNG__: _icons, technical diagrams, logos_, etc.
        - great for anything else than photos or animations
    4. __SVG__: same use cases as PNG, especially great for _responsive design_
        - _vector-based graphics format_; can scale up or down to any dimension w/o losing quality
        - potential issues: __need to convert any text fields__ to outlines using an image editor
- `alt` attribute: defines __text alternative__ to image being displayed
    - impact on search engines
    - impace on users with text-only browser (text-to-speech)

### HTML forms
- `<form>` lets you __collect input from users__
    - ex. mailing lists, contact forms, blog post comments
- they are the __money pages__: 
    - how e-commerce sites _sell their products_, how SaaS companies _collect payment for their service_, how non-profit groups _raise money online_
- can __measure success of website__ by effectiveness of its forms
    - how many _leads_ did our website send to our sales team? how many people _signed up_ for our product last week?
- __frontend and backend__ of functional HTML form:
    - _frontend user interface_: HTML & CSS
    - _backend server_: code to process forms for storing data in a database, sending an email, etc.

#### Make a Form:
1. define __action__: the _URL_ to which the input collected by the form is sent when the user clicks the _Submit_ button
2. define __method__: 
    - __get__: for only _getting_ data
    - __post__: for _changing_ data
3. define __inputs__ w/ __labels__
    - various types of inputs
        - `<input>`: text, email, radio, checkbox
        - `<select>` and `<option>`
        - `<textarea>`
        - `<button>`
    - match label's `for` attribute with the input's `id` for semantic HTML
4. set __submit button__
    - _validates inputs_
    - _submits to action URL_
```html
<form action='' method='get'>
    <!-- define inputs here -->
    <button>Submit</button>
</form>
```

#### Input Types
- `<input/>`:
    - define `name`, `type`, `placeholder`, `id` 
    - `type` _attribute_:
        - __text__, __email__, __color__
```html
<!-- text input -->
<div class='form-row'> <!-- for styling -->
                <label for='name'>Name</label>
                <input id='name' name='name' type='text' />
</div>
```
        - __radio__ : set `value`, _wrap group w/_ `fieldset` and _label w/_ `legend`
```html
<!-- radio button input -->
<fieldset class='form-row'> <!-- for grouping -->
                <legend>Type</legend>
                <input id='1' name='type' type='radio' value='1' />
                <label for='1' class='radio-label'>1</label>
                <input id='2' name='type' type='radio' value='2' checked />
                <label for='2' class='radio-label'>2</label>
</fieldset>
```
can style to check right/wrong of input value: `invalid` and `:valid`
can style to select input being filled out: `:focus`
        - __checkbox__: _wrap w/_ `<label>`
```html
<div class='form-row'>
                <label class='checkbox-label' for='available'>
                <input id='available' name='available' type='checkbox' value='is-available'/>
                <span>Available</span>
                </label>
</div>
```
- `<select>` for __dropdown__:
    - set `name` attribute
    - set `<option>` for __items__ w/ `value` attribute
    - _hard to style_ since behavior varies accross devices
```html
<!-- dropdown input -->
<div class='form-row'> <!-- for styling -->
            <label for='size'>Size</label>
            <select id='size' name='size'>
                <option value='l'>Large</option>
                <option value='s'>Small</option>
            </select>
</div>
```
- `<textarea>` for __multi-line text__ input:
    - use w/ < label>
```html
    <div class='form-row'>
        <label for='essay'>Essay</label>
        <textarea id='essay' name='essay'></textarea>
        <div class='instruction'>Describe in 500 words</div>
     </div>
</form>
```

### Semantic HTML
the idea that all your HTML markup should __convey__ the __underlying meaning__ of your __content__, not its appearance.

#### Document Outline
the semantics of the content of the page
- semantics: _hierarchical structure_ of a page
- __heading__ contribute to the semantics in a web page
- __sectioning elements__ also help create semantics in web pages

#### Sectioning Elements
_alternative to < div>_ but with __meaning__ to make it easier for search engines, screen readers, and other machines to identify the different parts of your website
- `<header>`: denotes introductory content
    - company's logo, navigation, author information, etc.
- `<nav>`: sections for navigation
- `<article>`: 
    - needs to _make sense even outside the context_ of the document; can be plucked out of your page and distributed in a completely different context
    - they are essentially mini web pages in the document and have _their own headers, footers, and document outline_, completely isolated from the rest of your sites
- `<section>`:
    - as __container__ for __layout purposes__: _explicit way to define sections_ in a document outline
    - similar to < article> but _doesn't need to make sense outside the context_ of the document
- `<aside>`: separate section to not be part of any articles
    - sidebar
    - advertisement
    - highlighted definitions, stats, or quotations
- `<footer>`: closing content
    - copyright notices, footer navigation, author bios, etc.
- `<figure>`: self-contained figure
    - contains `<img>`: diagram, illustration, code snippet, etc.
    - `<figcaption>`: optional caption for parent < figure> element; can replace the < img>'s alt attribute
- `<address>`: contact information for the author of the article or webpage
    - should not be used for arbitrary physical addresses
- `<time>`: time of day or calender date

#### Layout
- use __semantic HTML__ whenever you can
    - to help machines infer the structure of the content
    - but don't use them just for the sake of using them
    - whenever in doubt, _use a < div> instead_
- however, there is nothing wrong w/ using __< div> purely for layout purpose__
    - particularly for __flexbox__

#### CSS/Legacy Considerations
- legacy browsers may not be able to recognize semantic HTML elements so include the following in CSS stylesheets:
```css
section, article, aside, footer, header, nav {
        display: block;
}
```

#### Extra Semantic Bits
- [Schema.org microdata](https://schema.org/docs/gs.html): can alter the appearance of your site in search engine results
- [Twitter cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started): defines how your web page is displayed in tweets
- [Open Graph metadata](https://developers.facebook.com/docs/sharing/webmasters#markup): changes how Facebook shares your content