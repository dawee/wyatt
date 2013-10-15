# Wyatt

__Wyatt__ is a template engine for Titanium. It's based on __{JSON}__ and __{{mustache}}__ (Handlebars.js). 

## Installation

```bash
$ tipi install wyatt
```

## Getting started

Write in __Resources/index.yat__ :

```javascript
{
  "@type": "Window",

  "fullscreen": true,

  "@children": [
    {
        "@type": "Label",
        
        "text": "{{message}}"
    }
  ]
}
```

Write in __Resources/app.js__ :

```javascript
var wyatt = require('tipis/wyatt');

// Generates the UI
var yat = wyatt.render('index.yat', {message: 'Hello World !'})
// Finds and open the window
yat.first({type: "Window"}).open();
```

## YAT File Format

Special keys are prefixed with __@__. Special keys are not passed to the UI constructors.

__@type__ : The type name of the UI :

*   __View__ : [Ti.UI.View](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.View)
*   __Window__ : [Ti.UI.Window](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.Window)
*   __Button__ : [Ti.UI.Button](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.Button)
*   __Label__ : [Ti.UI.Label](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.Label)

__@children__ : The list of UIs to add into the current UI

## YAT Queries

Queries are used to retrieve __YAT elements__.

### yat.all(query)

Retreive a list of all the elements that matched the query.

A query is a JSON object. It's used to filter the elements who match every __name/value__ pair. 

Only special keys can be used for the query. Users can add any custom special key such as __@id__ or __@class__.

__query-example.yat__ :

```javascript
{
  "@type": "View",

  "@children": [
    {
      {{#persons}}
      {
        "@type": "Label",
        "@job": "{{job}}",
        "text": "{{name}}"
      }
      {{/persons}} 
    }
  ]
}
```

__app.js__ :

```javascript
var wyatt = require('tipis/wyatt');

// Generates the UI
var yat = wyatt.render('query-example.yat', {
  persons: [
    {name: "John Smith", job: "developer"},
    {name: "Stewart McKay", job: "developer"},
    {name: "Bob White", job: "manager"},
  ]
});

// Finds all the developers and change their color
yat.all({type: "Label", job: "developer"}).forEach(function (el) {
  el.set({color: 'red'});
});
```



### yat.first(query)

Same as __yat.all__ but returns only the first matched element.

## License 

(The MIT License)

Copyright (c) 2013 David Corticchiato;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
