version := `cat package.json | grep version |  sed -e 's/.*: "//' | sed -e 's/",//'`

tests:
	@./node_modules/.bin/tetanize --out wyatt.mockti.js
	@./node_modules/.bin/expresso

dist: tests
	@echo wyatt ${version}
	@mkdir -p dist
	@./node_modules/.bin/tetanize --out dist/wyatt-${version}.js
	@./node_modules/.bin/uglifyjs dist/wyatt-${version}.js -o dist/wyatt-${version}-min.js
