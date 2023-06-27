#!/usr/bin/python3
import web

urls = {
	'/', 'myClass'
	}

class myClass:
	def GET(self):
		return "<h1>Hello World</h1>"


class secondClass:
	def GET(self):
		return "<h1>This is a second route</h2>"

application = web.application(urls, globals()).wsgifunc()

