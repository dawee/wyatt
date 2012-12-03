#!/usr/bin/env python
import os

FIRST_DATA = """
/*
    Earp lib
    Written by David Corticchiato
*/
var Earp = {};module.exports = Earp;
"""


def concat(export, dir_name, file_names):
    for file_name in file_names:
        path = os.path.join(dir_name, file_name)
        if os.path.isfile(path):
            tmp_output_name = os.path.join(
                os.path.expanduser('~'), '.tmpjs'
            )
            os.system('yui-compressor %s > %s' % (
                path, tmp_output_name
            ))
            with open(tmp_output_name) as js_input:
                export['data'] += js_input.read()


def build():
    base = os.path.dirname(__file__)
    export = {'data': FIRST_DATA}
    os.path.walk(os.path.join(base, 'lib'), concat, export)
    os.path.walk(os.path.join(base, 'src'), concat, export)
    with open(os.path.join(base, 'earp.js'), 'w') as earp:
        earp.write(export['data'])


if __name__ == '__main__':
    build()
