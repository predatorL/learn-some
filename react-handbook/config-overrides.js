const { addWebpackExternals, override, addWebpackAlias, addDecoratorsLegacy, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = {
    webpack: override(
        addDecoratorsLegacy(),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css'
        }),
        addWebpackExternals({
            'videojs': 'videojs'
        }),
        addWebpackAlias({
            ['@']:  path.resolve(__dirname, "src/")
        }),
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' }
        })
    ),
};

