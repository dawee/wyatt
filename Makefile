tests:
	@./node_modules/.bin/tetanize --out wyatt.mockti.js
	@./node_modules/.bin/expresso

clean-docs:
	@rm -rf docs

docs: clean-docs
	@dox-foundation -s lib --template ./doc.jade