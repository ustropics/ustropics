######################
Connecting to Project
######################

Below are critical steps towards setting up and initializing the USTropics framework. There are some initial requirements for running this framework:

* `Python 3.7+
  <http://docs.django-cms.org/en/latest/#software-version-requirements-and-release-notes>`_

* `PIP 18.0+
  <https://pip.pypa.io/en/stable/>`_

* `Ubuntu Environment on Windows
  <https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab>`_

* `Django Web framework
  <https://www.djangoproject.com/>`_

****************
Initial Startup
****************

.. Run Ubuntu.exe::
* ``cd /mnt/c/Apache24/htdocs/website``
* ``source env/bin/activate``
* ``./manage.py runserver``

**********************************
Initialize GIT and Upload Project
**********************************

Run git.bash
  * ``cd /path/to/project``
  * ``git init``

add .gitignore file to /path/to/project::

  *.pyc
  *~
  /.vscode
  __pycache__
  myvenv
  db.sqlite3
  /static
  .DS_Store

check git status and add files
  * ``git status``
  * ``git add --all``
  * ``git remote add origin https://github.com/drphillgood/ustropics.git``
  * ``git commit -am "first commit"``
  * ``git push -u origin master``
