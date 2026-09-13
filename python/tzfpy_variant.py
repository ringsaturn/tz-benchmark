"""Which tzfpy build is installed in this interpreter.

tzfpy ships two variants under one distribution name, one import name and one
API: the lite build on PyPI (``2.0.0``, DefaultFinder over the ~4 MB lite
dataset) and the experimental full-precision build (``X.Y.Z+full``,
EmbeddedFinder over the ~14 MB unsimplified dataset, published only to tzfpy's
own index). They cannot coexist in one virtualenv, so each harness in this
directory runs once per venv and labels its tzfpy rows by asking this module
which variant it is looking at. The ``+full`` local version is the only
runtime difference; ``data_version()`` is the same for both.
"""

import importlib.metadata

VERSION = importlib.metadata.version("tzfpy")
FULL = VERSION.endswith("+full")

# Candidate label used in every result file.
LABEL = "tzfpy+full (EmbeddedFinder)" if FULL else "tzfpy (DefaultFinder)"
