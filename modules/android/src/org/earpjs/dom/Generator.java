package org.earpjs.dom;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.appcelerator.kroll.KrollFunction;
import org.appcelerator.kroll.KrollObject;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Node;

public class Generator {

	public static final int NO_PARENT = -1;
	
	private static List<Generator> instances = new ArrayList<Generator>(); 
	private int id;
	private Document dom;
	private int nodesCount;
	
    private Generator(int id) {
    	this.id = id;
    	this.dom = null;
    	this.nodesCount = 0;
    }

    public static Generator createGenerator() {
    	Generator generator = new Generator(instances.size());
    	instances.add(generator);
    	return generator;
    }
    
    public static Generator getGenerator(int id) {
    	return instances.get(id);
    }
    
    public void parse(String earp, KrollFunction callback, KrollFunction endCallback) {
    	this.dom = Jsoup.parse(earp);
    	
    	for (Node child : this.dom.getElementsByTag("earp").get(0).childNodes()) {
    		generateRecursive(NO_PARENT, child, callback);
    	}
    	
    	endCallback.call((KrollObject) endCallback, new HashMap<String, String>());
    }
    
    public String select(String selector) {
    	return this.dom.select(selector).get(0).attr("node-id");
    }
    
    private boolean isHTMLSpecifics(Node node) {
    	return node.nodeName().equals("html")
    			|| node.nodeName().equals("head")
    			|| node.nodeName().equals("body");
    }
    
    private HashMap<String, String> nodeAsMap(int parentId, int nodeId, Node node) {
    	HashMap<String, String> opt = new HashMap<String, String>();

    	opt.put("nodeName", node.nodeName());
		opt.put("nodeId", String.valueOf(nodeId));
    	if (parentId != NO_PARENT) {
    		opt.put("parentId", String.valueOf(parentId));
    	}

    	for (Attribute attribute : node.attributes()) {
    		opt.put(attribute.getKey(), attribute.getValue());
    	}
    	
    	return opt;
    }
    
    private void generateRecursive(int parentId, Node node, KrollFunction callback) {
    	int nodeId = NO_PARENT;

    	if (!isHTMLSpecifics(node)) {
        	nodeId = nodesCount;
    		node.attr("node-id", String.valueOf(nodeId));
        	callback.call((KrollObject) callback, nodeAsMap(parentId, nodeId, node));
        	nodesCount++;
    	}

    	for (Node child : node.childNodes()) {
    		generateRecursive(nodeId, child, callback);
    	}
    }
    
    public int id() {
    	return id;
    }

}