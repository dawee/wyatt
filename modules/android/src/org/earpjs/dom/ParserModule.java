package org.earpjs.dom;

import org.appcelerator.kroll.KrollFunction;
import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;

import org.appcelerator.titanium.TiApplication;
import org.appcelerator.kroll.common.Log;

@Kroll.module(name="Parser", id="org.earpjs.dom")
public class ParserModule extends KrollModule
{

	public ParserModule() {
		super();
	}

	@Kroll.onAppCreate
	public static void onAppCreate(TiApplication app) {}

	@Kroll.method
	public int parse(String earp, KrollFunction callback) {
		Generator generator = Generator.createGenerator(earp, callback);
		return generator.id();
	}
}

