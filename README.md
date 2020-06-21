# Connecting to project

**Run Ubuntu.exe**
cd /mnt/c/Apache24/htdocs/website
source env/bin/activate
python3 manage.py runserver


# Initialize git and upload project
## Create GIT account/repository project

**Run git.bash**
cd /path/to/project
git init

**add .gitignore file to /path/to/project**
`START_CODE

*.pyc
*~
/.vscode
__pycache__
myvenv
db.sqlite3
/static
.DS_Store

END_CODE`

**check git status and add files**
git status
git add --all
