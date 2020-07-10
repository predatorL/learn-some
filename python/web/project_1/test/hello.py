# coding=utf-8
from flask import Flask
import urllib
from werkzeug.routing import BaseConverter

app = Flask(__name__)
app.config['DEBUG'] = True

class ListConverter(BaseConverter):

    def __init__(self, ulr_map, separator="+"):
        super(ListConverter, self).__init__(ulr_map)
        self.separator = urllib.parse.unquote(separator)
    
    def to_python(self, value):
        return value.split(self.separator)

    def to_url(self, values):
        return self.separator.join(BaseConverter.to_url(value) for value in values)

app.url_map.converters['list'] = ListConverter

# # 基础路由
# @app.route('/')
# def hello_world():
#     return 'hello world!'

# # 动态路由
# @app.route('/item/<id>')
# def item(id):
#     return 'Item: {}'.format(id)

@app.route('/list1/<list:page_names>/')
def list1(page_names):
    return 'Separator: {} {}'.format('+', page_names)

@app.route('/list2/<list(separator=u"|"):page_names>/')
def list2(page_names):
    return 'Separator: {} {}'.format('|', page_names)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9000)