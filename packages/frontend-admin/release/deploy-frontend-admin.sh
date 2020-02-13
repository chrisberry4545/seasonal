git init
git config user.email "chrisbery4545@googlemail.com"
git config user.name "chrisbery4545"
git add .
git remote add origin git@github.com:chrisberry4545/seasonal-admin.git
PUBLIC_URL=./ yarn build
yarn gh-pages
rm -rf .git/
