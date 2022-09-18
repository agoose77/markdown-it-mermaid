"""documentation for jupyterlite"""
import datetime
import json
import os
import subprocess
import sys
from pathlib import Path

from sphinx.application import Sphinx

os.environ.update(IN_SPHINX="1")

CONF_PY = Path(__file__)
HERE = CONF_PY.parent
ROOT = HERE.parent
APP_PKG = ROOT / "package.json"
APP_DATA = json.loads(APP_PKG.read_text(encoding="utf-8"))
RTD = json.loads(os.environ.get("READTHEDOCS", "False").lower())

# metadata
author = APP_DATA["author"]
project = APP_DATA["name"]
copyright = f"{datetime.date.today().year}, {author}"

# The full version, including alpha/beta/rc tags
release = APP_DATA["version"]

# The short X.Y version
version = ".".join(release.rsplit(".", 1))

# sphinx config
extensions = [
    # first-party sphinx extensions
    "sphinx.ext.todo",
    "sphinx.ext.autosectionlabel",
    # mostly for markdown
    "myst_nb",
    "sphinx_copybutton",
]

autosectionlabel_prefix_document = True
myst_heading_anchors = 3
suppress_warnings = ["autosectionlabel.*"]

# files
# rely on the order of these to patch json, labextensions correctly
html_static_path = [
    # docs stuff
    "_static",
    # as-built application
    "../www/dist",
]
html_css_files = [
    "theme.css",
]

exclude_patterns = [
    "_build",
    ".ipynb_checkpoints",
    "**/.ipynb_checkpoints",
    "**/~.*",
    "**/node_modules",
    "babel.config.*",
    "jest-setup.js",
    "jest.config.js",
    "jupyter_execute",
    ".jupyter_cache",
    "test/",
    "tsconfig.*",
    "webpack.config.*",
]

# theme
html_theme = "pydata_sphinx_theme"
html_theme_options = {
    "github_url": APP_DATA["homepage"],
    "use_edit_page_button": True,
}

html_context = {
    "github_user": "agoose77",
    "github_repo": "markdown-it-mermaid",
    "github_version": "main",
    "doc_path": "docs",
}

html_sidebars = {
  "**": []
}

def setup(app):
    for path in [ROOT, ROOT / "www"]:
        subprocess.check_call(["npm", "install"], cwd=path)
        subprocess.check_call(["npm", "run", "build"], cwd=path)
