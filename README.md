# Chatbot Web Widget

Angular Elements allows you to create Custom Elements (from the WebComponents spec) from Angular Components.

This means that those components can be used outside of an Angular app!

## Development

Run `yarn` to install packages.

The component can be developed as any other Angular component: run `yarn start` and navigate to `http://localhost:4202/`.

## Build

The build configuration of the Angular Elements is defined in a separate project in `angular.json`. 

You can run this configuration with `yarn run build:elements`. It creates a build in `dist/elements-build` that only contains `ElementModule`. 

After this build the `./build-elements.js` script creates the final js file and
demo project in `dist/elements`.

To change the target of the compiled js file to either `es5` or `es2015`, update the `"postbuild:elements"` script in `package.json`. Default it creates an `es2015` file.
