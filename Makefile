UNAME := $(shell uname)

ifeq ($(UNAME), Darwin)
  titanium_path=~/Library/Application\ Support/Titanium
else
  titanium_path=~/.titanium
endif

run-demo:
	titanium build -d demo/twitter-client -p android

clean:
	rm -rf ${titanium_path}/modules/android/com.github.dawicorti.wyatt
	rm -rf modules/android/build

build:
	ant -f modules/android/build.xml

install:
	unzip -o modules/android/dist/com.github.dawicorti.wyatt-android-0.1.zip -d modules/android/dist
	rsync -ru modules/android/dist/modules ${titanium_path}
	./node_modules/.bin/tetanize --out demo/twitter-client/Resources/wyatt.js
