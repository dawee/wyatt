clean:
	rm -rf /Users/dawi/Library/Application\ Support/Titanium/modules/android/org.earpjs.dom
	rm -rf modules/android/build

build:
	ant -f modules/android/build.xml

install:
	unzip -o modules/android/dist/org.earpjs.dom-android-0.1.zip -d modules/android/dist
	rsync -ru modules/android/dist/modules /Users/dawi/Library/Application\ Support/Titanium
	../tetanize/bin/tetanize --out ../earp-sample/tipis/earp.js

all: build

.PHONY: build install
