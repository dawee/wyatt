# Wyatt

__Wyatt__ is a template engine for Titanium. It's based on __{JSON}__ and __{{mustache}}__ (Handlebars.js). 

## Installation

With [tipi](https://github.com/IsCoolEntertainment/tipi) :

```bash
$ tipi install wyatt
```

## Getting started

Write in __Resources/index.yat__ :

```javascript
{
  "element": "window",
  "options": {
    "fullscreen": true,
    "backgroundColor": "white"   
  }
  "tree": [
    {
      "element": "label",
      "options": {
        "text": "{{message}}"  
      }
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
yat.first({element: "window"}).open();
```

## YAT File Format

__element__ : The YAT element name :

*   __view__ : [Ti.UI.View](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.View)
*   __window__ : [Ti.UI.Window](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.Window)
*   __button__ : [Ti.UI.Button](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.Button)
*   __label__ : [Ti.UI.Label](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.Label)
*   __imageview__ : [Ti.UI.ImageView](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.ImageView)
*   __textfield__ : [Ti.UI.TextField](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.TextField)

__options__ : The object to pass to the Titanium UI object.

__tree__ : The list of elements to add into the current one

## YAT Queries

Queries are used to retrieve __YAT elements__.

### yat.all(query)

Retreive a list of all the elements that matched the query.

A query is a JSON object. It's used to filter the elements who match every __name/value__ pair. 

Users can add any custom special key.

__query-example.yat__ :

```javascript
{
  "element": "view",

  "tree": [
    {
      {{#persons}}
      {
        "element": "label",
        "job": "{{job}}",
        "options": {
          "text": "{{name}}"  
        }
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
yat.all({element: "label", job: "developer"}).forEach(function (el) {
  el.set({color: 'red'});
});
```

### yat.first(query)

Same as __yat.all__ but returns only the first matched element.

## License 

(The MIT License)

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
