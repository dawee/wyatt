SHELL = /bin/bash

test:
	./node_modules/.bin/tetanize --out demo/twitter-client/Resources/wyatt.js
	titanium build -d demo/twitter-client/Resources/wyatt.js -p mobileweb
	./node_modules/.bin/statik --port 8000 demo/twitter-client/build/mobileweb
