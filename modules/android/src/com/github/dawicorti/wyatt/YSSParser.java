package com.github.dawicorti.wyatt;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.appcelerator.kroll.common.Log;
import org.appcelerator.titanium.util.TiFileHelper;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Node;

import com.osbcp.cssparser.CSSParser;
import com.osbcp.cssparser.PropertyValue;
import com.osbcp.cssparser.Rule;
import com.osbcp.cssparser.Selector;

public class YSSParser {
	
	private String path;
	
	private YSSParser(String path) {
		this.path = path;
	}
	
	public static void applyDOMStyles(Document dom) {
		for (Node style : dom.getElementsByTag("style")) {
			YSSParser parser = new YSSParser(style.attr("src"));
			parser.applyRules(dom);
		}
	}

	private void applyRuleOnSelector(Rule rule, Selector selector, Document dom) {
		for (Node node : dom.select(selector.toString())) {
			for (PropertyValue property : rule.getPropertyValues()) {
				node.attr(property.getProperty(), property.getValue());
			}
		}
	}
	
	private void applyRule(Rule rule, Document dom) {
		for (Selector selector : rule.getSelectors()) {
			applyRuleOnSelector(rule, selector, dom);
		}
	}
	
	private void applyRules(Document dom) {
		String yss = readFile(path);
		
		try {
			for (Rule rule : CSSParser.parse(yss)) {
				applyRule(rule, dom);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
    private String readFile(String path) {
    	String data = "";
    	InputStream inputStream = null;
    	
    	try {
            inputStream = TiFileHelper.getInstance().openInputStream(path, true);
            data = IOUtils.toString(inputStream);
			inputStream.close();
        } catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
    	
    	return data;
    }
}