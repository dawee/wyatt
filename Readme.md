earp.js
=======

__earp.js__ is view engine for [Titanium](http://www.appcelerator.com/platform/titanium-sdk "Titanium")


Philosophy
----------

With __earp.js__ you will describe your views in XML and [Handlebars](https://github.com/wycats/handlebars.js/ "Handlebars") syntaxes.

It's based on :

* __Titanium API__
* __Handlebars__

Install
-------

You can install earpjs with [tipi](https://github.com/IsCoolEntertainment/tipi "tipi") :

```bash
$ tipi install earpjs
```

Getting started
---------------

### 1. Create a __hello.rp__ file in your Resources folder and copy/paste this :

```xml
<earp>
    <window id="win" backgroundColor="white">
        <label top= "20%" left="50%" text="{{text}}" />
        <button top= "50%" left="50%" id="foobar" title="click here !" />
    </window>
</earp>
```


### 2. Fill your __app.js__ with this :

```javascript
var Earp = require('tipis/Earp');

var hello = Earp.render('app/view/index.rp', {text: 'Hello World !'});

Earp('#foobar', hello).addEventListener('click', function() {
    alert('Button clicked');     
});

Earp('#win', hello).open();
```
