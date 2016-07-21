# Introduction

The Citadel front end is a Single Page Application (SPA) built in [Typescript (~1.8)](https://www.typescriptlang.org/) with 
[Angular (~2)](https://angular.io/) that uses the [SystemJS](https://github.com/systemjs/systemjs) 
module loader and a [Bootstrap (~3)](http://getbootstrap.com/) based theme named Metronic (4.6). 
Project is structured using Minko Gechev's [angular2-seed](https://github.com/mgechev/angular2-seed). 
It uses [Gulp](http://gulpjs.com/) for building the application. Testing is done through
[Karma](https://karma-runner.github.io/1.0/index.html) using the 
[Jasmine](http://jasmine.github.io/) framework. 

**Note**: All dependencies are MIT licenced except for the [Metronic theme](https://themeforest.net/licenses/standard).
 
# Style conventions

Style convention should try to adhere to the official Angular.io 
[style guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

## Prefix

As per the style guide [recommendation](https://angular.io/styleguide#!#02-07) a prefix should be used 
for DOM selectors in order to avoid conflict and improve readability.

The chosen prefix is: **ctd** (short for "Citadel").

Example: 

```
@Component({
  selector: 'ctd-my-component'
})
export class MyComponent {}
```

# How to start

**Note**: this project requires [node](https://nodejs.org/en/) v4.x.x or higher and
npm (Package Manager - installed with node) 3.x.x or higher.

## Working behind a proxy ?

Proxy settings should be set for npm:
```bash
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

Typescript typings definition are managed through [typings](https://github.com/typings/typings) and will require 
proxy settings as well in order to be downloaded. Set a `.typingsrc` at the root of the project with the following:
 ```bash
proxy="http://proxy.company.com:8080"
rejectUnauthorized=false
 ```

## Start

In order to start the project locally use:

```bash
# go to project root directory
cd citadel-webapp 
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
# npm run build.docs

# dev build
npm run build.dev
# prod build
npm run build.prod
```

_Does not rely on any global dependencies._

# Table of Content

- [Configuration](#configuration)
- [Environment Configuration](#environment-configuration)
- [Tools documentation](#tools-documentation)
- [How to extend?](#how-to-extend)
- [Running tests](#running-tests)
- [Progressive Web Apps](#progressive-web-apps)
- [Directory Structure](#directory-structure)

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the `./tools/env/config.json` file. The keys in the file are the different environments.

This can be specified by using:

```bash
npm start -- --config-env ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add different key-value pairs to the `config.json` file in order to alter extra such environments.

# Tools documentation

A documentation of the provided tools can be found in [tools/README.md](tools/README.md).

# How to extend?

Visit the [Wiki page](https://github.com/mgechev/angular2-seed/wiki) of the angular2-seed project.

# Running tests

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window

# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

# Directory Structure

```
.
├── README.md
├── gulpfile.ts                <- configuration of the gulp tasks
├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.conf.js         <- e2e tests configuration
├── src                        <- source code of the application
│   └── client
│       ├── app
│       │   ├── +<feature> <!- application feature are grouped ->
│       │   │   ├── feature.component.css
│       │   │   ├── feature.component.e2e-spec.ts
│       │   │   ├── feature.component.html
│       │   │   ├── feature.component.spec.ts
│       │   │   ├── feature.component.ts
│       │   │   ├── feature.routes.ts 
│       │   │   └── index.ts <!-- entry point to this feature -->
│       │   ├
│       │   ├── app.component.e2e-spec.ts
│       │   ├── app.component.html
│       │   ├── app.component.spec.ts
│       │   ├── app.component.ts
│       │   ├── hot_loader_main.ts
│       │   ├── main.ts
│       │   └── shared <!- i.e transverse components meant to be reused ->
│       │       ├── index.ts
│       │       ├── navbar
│       │       │   ├── index.ts
│       │       │   ├── navbar.component.css
│       │       │   ├── navbar.component.html
│       │       │   └── navbar.component.ts
│       │       └── toolbar
│       │           ├── index.ts
│       │           ├── toolbar.component.css
│       │           ├── toolbar.component.html
│       │           └── toolbar.component.ts
│       ├── assets
│       │   └── theme
│       │       └── metronic
│       ├── css
│       │   └── main.css
│       ├── index.html
│       ├── tsconfig.json
│       └── typings.d.ts
├── test-main.js               <- testing configuration
├── tools
│   ├── README.md              <- build documentation
│   ├── config
│   │   ├── project.config.ts  <- configuration of the specific project
│   │   ├── seed.config.interfaces.ts
│   │   └── seed.config.ts     <- generic configuration of the seed project
│   ├── config.ts              <- exported configuration (merge both seed.config and project.config, project.config overrides seed.config)
│   ├── debug.ts
│   ├── manual_typings
│   │   ├── project            <- manual ambient typings for the project
│   │   │   └── sample.package.d.ts
│   │   └── seed               <- seed manual ambient typings
│   │       ├── angular2-hot-loader.d.ts
│   │       ├── autoprefixer.d.ts
│   │       ├── colorguard.d.ts
│   │       ├── connect-livereload.d.ts
│   │       ├── cssnano.d.ts
│   │       ├── doiuse.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── istream.d.ts
│   │       ├── karma.d.ts
│   │       ├── merge-stream.d.ts
│   │       ├── open.d.ts
│   │       ├── postcss-reporter.d.ts
│   │       ├── slash.d.ts
│   │       ├── stylelint.d.ts
│   │       ├── systemjs-builder.d.ts
│   │       ├── tildify.d.ts
│   │       ├── tiny-lr.d.ts
│   │       └── walk.d.ts
│   ├── tasks                  <- gulp tasks
│   │   ├── project            <- project specific gulp tasks
│   │   │   └── sample.task.ts
│   │   └── seed               <- seed generic gulp tasks. They can be overriden by the project specific gulp tasks
│   │       ├── build.assets.dev.ts
│   │       ├── build.assets.prod.ts
│   │       ├── build.bundles.app.ts
│   │       ├── build.bundles.ts
│   │       ├── build.docs.ts
│   │       ├── build.html_css.ts
│   │       ├── build.index.dev.ts
│   │       ├── build.index.prod.ts
│   │       ├── build.js.dev.ts
│   │       ├── build.js.e2e.ts
│   │       ├── build.js.prod.ts
│   │       ├── build.js.test.ts
│   │       ├── build.js.tools.ts
│   │       ├── check.versions.ts
│   │       ├── clean.all.ts
│   │       ├── clean.dev.ts
│   │       ├── clean.prod.ts
│   │       ├── clean.tools.ts
│   │       ├── copy.js.prod.ts
│   │       ├── css-lint.ts
│   │       ├── e2e.ts
│   │       ├── generate.manifest.ts
│   │       ├── karma.start.ts
│   │       ├── serve.coverage.ts
│   │       ├── serve.docs.ts
│   │       ├── server.prod.ts
│   │       ├── server.start.ts
│   │       ├── tslint.ts
│   │       ├── watch.dev.ts
│   │       ├── watch.e2e.ts
│   │       ├── watch.test.ts
│   │       └── webdriver.ts
│   ├── utils                  <- build utils
│   │   ├── project            <- project specific gulp utils
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed               <- seed specific gulp utils
│   │   │   ├── clean.ts
│   │   │   ├── code_change_tools.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   ├── tsproject.ts
│   │   │   └── watch.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├── tsconfig.json              <- configuration of the typescript project (ts-node, which runs the tasks defined in gulpfile.ts)
├── tslint.json                <- tslint configuration
├── typings                    <- typings directory. Contains all the external typing definitions defined with typings
├── typings.json
```

