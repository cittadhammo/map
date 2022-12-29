#!/usr/bin/env sh

npm run build
git add dist -f
git commit -m "deploy"
git subtree push --prefix dist origin gh-page


git push origin `git subtree push --prefix dist origin gh-page`:production --force
