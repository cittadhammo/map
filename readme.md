# OpenLayers + Vite

This example demonstrates how the `ol` package can be used with [Vite](https://vitejs.dev/).

To get started, run the following (requires Node 12+):

    npx create-ol-app my-app --template vite

Then change into your new `my-app` directory and start a development server (available at http://localhost:3000):

    cd my-app
    npm start

To generate a build ready for production:

    npm run build

Then deploy the contents of the `dist` directory to your server.  You can also run `npm run serve` to serve the results of the `dist` directory for preview.

# push main the first time

https://www.youtube.com/watch?v=yo2bMGnIKE8

    git init
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/DhammaCharts/map.git
    git push -u origin main

# push main after the first time

    git add .
    git commit -m "first commit"
    git push


# deploy the dist

    git add dist -f
    git commit -m "adding dist"
    git subtree push --prefix dist origin gh-page
