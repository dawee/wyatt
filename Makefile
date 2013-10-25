version := `cat package.json | grep version |  sed -e 's/.*: "//' | sed -e 's/",//'`

clean:
	rm -rf wyatt.mockti.js dist 

tests:
	@./node_modules/.bin/tetanize --out wyatt.mockti.js
	@./node_modules/.bin/expresso

dist: clean tests
	@echo wyatt ${version}
	@mkdir -p dist
	@./node_modules/.bin/tetanize --out dist/wyatt-${version}.js
	@./node_modules/.bin/uglifyjs dist/wyatt-${version}.js -o dist/wyatt-${version}-min.js
