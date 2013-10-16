tests:
	mkdir -p test-lib
	./node_modules/.bin/tetanize --out wyatt.mockti.js
	./node_modules/.bin/expresso
