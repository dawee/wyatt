# Wyatt

__Wyatt__ is a template engine for Titanium. It's based on __{JSON}__ and __{{mustache}}__ (Handlebars.js). 

Write in __Resources/index.yat__ :

```javascript
{
  "el": "window",
  "options": {
    "fullscreen": true,
    "backgroundColor": "white"   
  },
  "tree": [
    {
      "el": "label",
      "options": {
        "text": "{{message}}"  
      }
    }
  ]
}
```

Write in __Resources/app.js__ :

```javascript
var wyatt = require('wyatt');

// Generates the UI
var yat = wyatt.render('index.yat', {message: 'Hello World !'})
// Finds and open the window
yat.first({el: "window"}).open();
```

Documentation : [dawicorti.github.io/wyatt](http://dawicorti.github.io/wyatt/)

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
