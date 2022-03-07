# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Modified by Pablo

Otra modificacion por parte de Pablo

# `Loaders`

Loader component returns one of two types of loaders:

- Progress Bar (default).
- Spinner (passing the type='spinner' prop)

## `Loaders Use`

Loader must be rendered whenever an HTTP request isnt fulfilled. (Conditional Rendering).

### `Loaders props`

Loader component receives the following props:

**type** : String. can be 'spinner' to display an spinner, or null to display a progress bar (default option).

**size** : Must be one of the followings: ( 'xs','sm','md','lg','xl')

**color** : String. Specify the color of the loader.

**height** (only for Progress type): String. specify the height of the Progress Bar.

Modified by Maximiliano Rama
