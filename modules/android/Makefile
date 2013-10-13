clean:
	rm -rf /Users/dawi/Library/Application\ Support/Titanium/modules/android/org.earpjs.dom
	rm -rf build

build:
	ant

install:
	unzip -o dist/org.earpjs.dom-android-0.1.zip -d dist
	rsync -ru dist/modules /Users/dawi/Library/Application\ Support/Titanium
	rm -rf dist/modules 

all: build

.PHONY: build install
