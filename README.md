earp.js
=======

__earp.js__ is view engine for [Titanium](http://www.appcelerator.com/platform/titanium-sdk "Titanium")


Philosophy
----------

With __earp.js__ you will describe your views in XML and [Handlebars](https://github.com/wycats/handlebars.js/ "Handlebars") syntaxes.

It's based on :

* __Titanium API__
* __Handlebars__


Getting started
---------------

### 1. Add __earp.js__ in your Resources folder

### 2. Create a __hello.earp__ file in your Resources folder and copy/paste this :

```xml
<dialog>
    <label top= "50%" left="50%" text="{{text}}" />
</dialog>
```


### 3. Fill your __app.js__ with this :

```javascript
var Earp = require('earp');

var dialog = Earp.build('hello', {text: 'Hello World !'});
dialog.open();
```

