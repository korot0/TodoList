# Webpack Template

A minimal Webpack template for starting new web development projects with both development and production configurations.

## Features

- Bundling and minification of JavaScript files
- CSS extraction and minification in production
- HTML file injection
- Development and production configurations

## Installation

To use this template, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/webpack-template.git
    ```

2. Install the dependencies:

    ```bash
    cd webpack-template
    npm install
    ```

## Development Setup

For development, use the following command to start a local server and enable live reloading:

```bash
npm run start
```

This will use `webpack-dev-server` to bundle your files, and any changes to source files will be automatically reflected in the browser.

### Available Scripts

- `npm run start`: Starts the development server with live reloading.
- `npm run build`: Creates a production-ready build with minified JavaScript and CSS.

## Project Structure

```
webpack-template/
├── src/
│   ├── index.js          # Entry point for JavaScript
│   └── index.html        # HTML template
├── dist/                 # Output folder for the production build
├── webpack.config.js     # Webpack configuration file
└── package.json          # NPM dependencies and scripts
```

## Customization

- Modify the `src/index.js` and `src/index.html` files for your project.
- Customize Webpack's `webpack.config.js` as needed (e.g., for additional loaders, plugins, or configurations).
- You can also update the scripts in `package.json` if you want to add additional build steps or configurations.
