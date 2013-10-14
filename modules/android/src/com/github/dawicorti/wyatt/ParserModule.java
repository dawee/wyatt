package com.github.dawicorti.wyatt;

import org.appcelerator.kroll.KrollFunction;
import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;

import org.appcelerator.titanium.TiApplication;

@Kroll.module(name="Parser", id="com.github.dawicorti.wyatt")
public class ParserModule extends KrollModule
{

	public ParserModule() {
		super();
	}

	@Kroll.onAppCreate
	public static void onAppCreate(TiApplication app) {}

	@Kroll.method
	public int createGenerator() {
		Generator generator = Generator.createGenerator();
		return generator.id();
	}

	@Kroll.method
	public void parse(int genId, String path, KrollFunction callback, KrollFunction endCallback) {
		Generator generator = Generator.getGenerator(genId);
		
		if (generator != null) {
			generator.parse(path, callback, endCallback);
		}
	}

	@Kroll.method
	public String select(int genId, String selector) {
		Generator generator = Generator.getGenerator(genId);
		String nodeId = null;
		
		if (generator != null) {
			nodeId = generator.select(selector);
		}
		
		return nodeId;
	}

}

