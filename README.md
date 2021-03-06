# web-base
Use this to start other web projects. It gives you a good base to start from including
+ has an .editorconfig to enforce typographic style like tabs instead of spaces and no trailing whitespace
+ uses eslint to enforce javascript coding conventions such as no `var`s perfer arrow functions, etc
+ compiles es6 using babel and webpack (includes sourcemaps)
+ compiles jade -> html or strings (.tpl)
+ compiles sass -> css adding browser specific prefixes where necessary

## New projects
First create a new repository on [github](https://github.com/new)
```
git clone git@github.com:jplikesbikes/web-base.git newrepos
cd newrepos
git remote rename origin upstream
git remote add origin git@github.com:jplikesbikes/newrepos
git push -u origin master
```
Update the package.json name and repository.
Update the readme.
Your good to go!

## Develop
```
npm install
npm test // run tests
npm run linter // lint and auto fix errors
npm run web-test //  run tests in browser with webpack-dev-server
open localhost:8080/test.bundle
npm run server // run webpack-dev-server with hot module reloading
open localhost:8080
```

Debug test commandline
```
./node_modules/mocha/bin/mocha -w --debug-brk --inspect --compilers js:babel-register test/**/*.spec.js
```

Watching Tests
```
npm test -- --watch
```

Compile into `bin` and deploy to s3
```
npm run compiler
npm run aws-deploy s3://your-bucket-here
```
note you need the aws cli installed for deployment to work
