# LeanixTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## App description

The application should be developed with Angular (https://angular.io/docs/ts/latest/quickstart.html).

We recommend using the Angular-CLI (https://github.com/angular/angular-cli) because it allows to easily setup a working environment.

The application itself shall consist of a Main-Detail view. The Main View (List View) shall show a list of the publicly available repositories on Github.

As we are using GraphQL heavily in our company, you are required to use the GraphQL API: https://developer.github.com/v4/

If one clicks on a link in the Main View, it shall open a detail view with the "Constributors" of the selected repository.

The styling (CSS) of the application is not in focus, but of course, a nice-looking GUI is always appreciated.

If you have some more ideas (... or time) to extend the application, please feel free to do so. As we are using ngrx (https://github.com/ngrx/store) for the state handling in our application, this would be an interesting addition.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
