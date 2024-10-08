# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))

# -- RTD New update -----------------------------------------------------
# https://about.readthedocs.com/blog/2024/07/addons-by-default/

# Define the canonical URL if you are using a custom domain on Read the Docs
# html_baseurl = os.environ.get("READTHEDOCS_CANONICAL_URL", "")

# Tell Jinja2 templates the build is running on Read the Docs
# if os.environ.get("READTHEDOCS", "") == "True":
#     html_context["READTHEDOCS"] = True

import sphinx_rtd_theme
import time

# -- Project information -----------------------------------------------------

project = 'SunFounder Documents'
copyright = f'{time.localtime().tm_year}, SunFounder'
author = 'www.sunfounder.com'

# -- sphinx_rtd_theme Theme options -----------------------------------------------------
html_theme_options = {
    'flyout_display': 'attached'
}

# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx.ext.autosectionlabel',
    'sphinx_copybutton',
    'sphinx_rtd_theme'
]

# Add any paths that contain templates here, relative to this directory.

templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []


#html_static_path = ['_static']

#html_favicon = '_static/img/sunfounder_icon.png'
#html_logo = '_static/img/sunfounder.png'


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
#html_theme = 'alabaster'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_theme = 'sphinx_rtd_theme'
html_theme_path = [sphinx_rtd_theme.get_html_theme_path()]



html_js_files = [
    'https://ezblock.cc/readDocFile/custom.js',
]
html_css_files = [
    'https://ezblock.cc/readDocFile/custom.css',
]


