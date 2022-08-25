rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git branch -M main &&
git remote add origin git@github.com:Grey-1011/bigScreen-website.git
git push -f -u origin main &&
cd -
