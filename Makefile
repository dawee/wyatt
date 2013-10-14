platform=$(uname)

ifeq (platform, "Darwin")
  titanium_path=~/Library/Application\ Support/Titanium
else
  titanium_path=~/.titanium
endif


clean:
	rm -rf ${titanium_path}/modules/android/com.github.dawicorti.wyatt
	rm -rf modules/android/build

build:
	ant -f modules/android/build.xml

install:
	unzip -o modules/android/dist/com.github.dawicorti.wyatt-android-0.1.zip -d modules/android/dist
	rsync -ru modules/android/dist/modules ${titanium_path}
	../tetanize/bin/tetanize

all: build

.PHONY: build install
