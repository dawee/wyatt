platform=$(uname)

ifeq (platform, "Darwin")
  titanium_path=~/Library/Application\ Support/Titanium
else
  titanium_path=~/.titanium
endif


clean:
	rm -rf ${titanium_path}/modules/android/org.earpjs.dom
	rm -rf modules/android/build

build:
	ant -f modules/android/build.xml

install:
	unzip -o modules/android/dist/org.earpjs.dom-android-0.1.zip -d modules/android/dist
	rsync -ru modules/android/dist/modules ${titanium_path}
	../tetanize/bin/tetanize --out ../earp-sample/tipis/earp.js

all: build

.PHONY: build install
