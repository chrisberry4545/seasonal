git init
git add .
git remote add origin git@github.com:chrisberry4545/seasonal-admin.git
yarn build
yarn gh-pages
rm -rf .git/
