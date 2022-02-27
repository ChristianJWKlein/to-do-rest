# API for todo list

## nvm use 15

## To deploy into G Cloud Engine

### Transpile your Typescript into JS

In tsconfig.json uncomment "outDir": "./", Change to "outDir": "./build",

Run the following command in the command line:

tsc

### Edit the Build Folder

create: package.json into the build folder

Put the following code in to tell GCloud where to look

{
"scripts": {
"start": "node index.js"
}
}

add a copy of the app.yaml folder into the build folder

cd into "build"

You can now run:

gcloud app deploy

## Run locally

npx ts-node index.ts

## To rebuild

tsc

This will compile the ts --> js

cd into build

gcloud app deploy
