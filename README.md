# Delivery Much Challenge - Pokedex

## Environment Dependencies (Before You Start)

Download & Install [NodeJS](https://nodejs.org/) (v13+ Recommended).
Then Install the [Angular CLI](https://github.com/angular/angular-cli) (Version 11.0.4+ Recommended), using the Node Package Manager: `npm install -g @angular/cli`

## Development server

Navigate to the cloned folder (containing the package.json file), and run `npm install` to install the project's dependencies. Then, run `ng s -o` to launch the dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. The environment files corresponding to both build scenarios are within folder `environments`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

End-to-end tests will not be implemented for this project. The basic structure to implement them, however, will be in place.

## Code scaffolding

Run `ng generate component component-name` to generate a new component (inside the folder you wish to create a new component). You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module` following the same process.

## Project documentation

In order to generate an overview documentation of the project, install [Compodoc](https://compodoc.app/) by running:

`npm install -g @compodoc/compodoc`

Then, from the folder contaning the `tsconfig.json` file, run `compodoc -p tsconfig.json src -s`. The documentation will be available at: `http://localhost:8080`

## Folder structure

`/app` => Contains the Angular application

`../_shared` => Contains the Services, Components and Modules shared across multiple features

`../*featureName*` => Contains the Module corresponding to a feature

`/assets` => Contains image assets, and styles shared across multiple features

`../images` => Contains folders named after a description of the assets contained within them

`../../*description*` => Contains image assets corresponding to the folder's name

`../mixins` => Contains SCSS/SASS mixins

`../styles` => Contains styles to me imported globally by `/app/styles.scss`, separated by files named after their funcionality

`/environments` => Contains TS files which export environment variables to be used across multiple features (I.E.: API URLs)