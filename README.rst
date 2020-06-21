######################
Connecting to Project
######################

Below are critical steps towards setting up and initializing the USTropics framework. There are some initial requirements for running this framework:

* `Ubuntu Environment on Windows
  <https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab>`_

* `Python 3.7+
  <http://docs.django-cms.org/en/latest/#software-version-requirements-and-release-notes>`_

* `PIP 18.0+
  <https://pip.pypa.io/en/stable/>`_

* `Virtualenv 16.4+
  <https://pypi.org/project/virtualenv/>`_

* `Django Web Framework
  <https://www.djangoproject.com/>`_

* `Github Account
  <https://github.com/>`_

****************
Initial Startup
****************

This will cover the initial construction of virtual environment (env), download django framework, and create new_project directory files


Run Ubuntu.exe
  * ``cd /mnt/c/path/to/project``
  * ``virtualenv env``
  * ``source env/bin/activate``
  * ``pip install django``
  * ``django-admin startproject project_name``


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
