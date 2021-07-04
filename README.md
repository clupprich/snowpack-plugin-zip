# snowpack-plugin-zip

Create a ZIP file of your build directory.

## Setup

```
npm install --save-dev snowpack-plugin-zip
```

```js
// snowpack.config.mjs
export default {
  plugins: [
    ['snowpack-plugin-zip', { outputPath: 'build/release.zip' }],
  ],
};
```

## Plugin Options

| Name    | Type         | Description                                                                                            |
| :------ | :----------: | :----------------------------------------------------------------------------------------------------- |
| `outputPath` | `string` | The path of the resulting ZIP file. Must include the actual filename, too (e.g. `build/release.zip`). |
