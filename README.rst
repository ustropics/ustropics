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

* Pillow

* Scripts

****************
Initial Startup
****************

This will cover the initial construction of virtual environment (env), download django framework, and create new_project directory files. Users will have already needed to
established a linux-based OS (this tutorial uses Ubuntu on Windows).

Pip INSTALLED_APPS
  * ``pip install django-crispy-forms``
  * ``pip install django-ckeditor``
  * ``pip install django-bleach``
  * ``pip install django-taggit``
  * ``pip install Pillow``

run Ubuntu.exe
  * ``cd /mnt/c/path/to/project``
  * ``virtualenv env``
  * ``source env/bin/activate``
  * ``pip install django``
  * ``django-admin startproject project_name``
  * ``cd project_name``

  Now we need to execute the following commands to connect to our DB and establish
  Super User.

  * ``./manage.py migrate``
  * ``./manage.py createsuperuser``

After initial setup above, if user ever need to reconnect to their project, user can simply use these commands below:

* ``cd /mnt/c/path/to/project``
* ``source env/bin/activate``
* ``cd project_name``
* ``./manage.py runserver``


**********************************
Initialize GIT and Upload Project
**********************************

It's good practice to connect Github to user projects. Below we will quickly outline these processes. See Github requirements above.

run git.bash
  * ``cd /path/to/project``
  * ``git init``

add .gitignore file to /path/to/project::

  *.pyc
  *~
  /.vscode
  __pycache__
  env
  db.sqlite3
  /static
  .DS_Store

We fist should check ``git status`` (ensure we are reading files), initialize an origin connection, and push our first commit to origin branch:

* ``git status``
* ``git add --all``
* ``git remote add origin https://github.com/<USER_ACCOUNT_NAME>/<PROJECT_NAME>.git``
* ``git commit -am "first commit"``
* ``git push -u origin master``

After initial setup above, if user ever needs to push an update to their project, user can simply use these commands below:

* ``git commit -am "commit comment"``
* ``git push origin master``

*************************
Creating our First Module
*************************

Django uses a modular structure, where modules are labeled as ``apps``. Apps can be intricately connected through a project. Below we will create
a blog app for our project to track posts. Ensure we are still in the root directory for our project (where the manage.py file is located)

* ``./manage.py startapp blog``
* ``./manage.py createsuperuser``
