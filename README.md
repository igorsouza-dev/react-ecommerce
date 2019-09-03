# Configuring VSCODE for React

## Editor config

```
$ touch .editorconfig
```

Add inside the file
```
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## Eslint

Install dependency

```
$ yarn add -D eslint
```

Run eslint wizard

```
$ yarn eslint --init
```

Answer the questions on the terminal like this:

- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- React
- N
- Browser
- Use a popular style guide
- Airbnb (https://github.com/airbnb/javascript)
- JavaScript
- Y

If you use Yarn, delete the `package-lock.json` and then run `yarn` again
After the installation, a `.eslintrc.js` will be generated.
Install babel plugin for eslint. This plugin will make eslint understands that you are using ES6

```
$ yarn add -D babel-eslint
```
Edit the .eslintrc.js file and add right before `parserOptions`:

```
parser: 'babel-eslint',
```

## Prettier

Install the dependencies

```
$ yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

Edit the `.eslintrc.js` file and inside the extends array the following strings:

```
'prettier',
'prettier/react'
```
On plugins, add:
```
'prettier'
```
On the rules property:

```
'prettier/prettier': 'error',
'react/jsx-filename-extension': [
    'warn',
    { extensions: ['.jsx', '.js'] }
],
'import/prefer-default-export': 'off'
```

The whole file should look like:

```
module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
        'prettier',
        'prettier/react'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier'
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] }
        ],
        'import/prefer-default-export': 'off'
    },
};

```

Now, add the `.prettierrc` file and add inside:

```
{
    "singleQuote": true,
    "trailingComma": "es5"
}

```
