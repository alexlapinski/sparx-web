import cherrypy
from jinja2 import Environment, FileSystemLoader
env = Environment(loader=FileSystemLoader('web'))

class SparxServer(object):
    
    @cherrypy.expose
    def index(self):
    	tmpl = env.get_template('index.html')
        return tmpl.render(salutation='Hello', target='World')


cherrypy.quickstart(SparxServer())