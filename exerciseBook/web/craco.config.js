const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');
const CracoMultiplePage = require('craco-multiple-page');

module.exports = {
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: "tsconfig",
          baseUrl: "./src",
          tsConfigPath: "./tsconfig.paths.json"
        }
      },
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      },
      {
        plugin: CracoMultiplePage,
        options: {
          pages: [
            {
              name: 'app',
              template: './public/app.html',
              entry: './src/app/index.tsx',
            },
            {
              name: 'admin',
              template: './public/admin.html',
              entry: './src/admin/index.tsx',
            },
          ],
        },
      },
    ],
  };