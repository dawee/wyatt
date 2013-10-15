# Wyatt

  __Wyatt__ is a template engine for Titanium.
  It's based on __{JSON}__ and __{{mustache}}__ (Handlebars.js). 

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

Special attributes are prefixed with __@__.
These special attributes are not passed to the UI constructors.

__@type__ : The type name of the UI :

*   __View__ : [Ti.UI.View](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.View)
*   __Window__ : [Ti.UI.Window](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.Window)
*   __Button__ : [Ti.UI.Button](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.Button)
*   __Label__ : [Ti.UI.Label](http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.Label)

__@children__ : The list of UIs to add into the current UI

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
