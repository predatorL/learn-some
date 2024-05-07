const {
    override,
    addDecoratorsLegacy,
    disableEsLint
  } = require("customize-cra");

module.exports = override(
    addDecoratorsLegacy(),
    disableEsLint(),
)

// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     config.module.rules.forEach(d => {
//         d.oneOf &&
//             d.oneOf.forEach(e => {
//                 if (e && e.options && e.options.name) {
//                     e.options.name = e.options.name.replace('[hash:8].', '');
//                 }
//             });
//     });
//     config = injectBabelPlugin(["@babel/plugin-proposal-decorators",{legacy:true}],config);
//     return config;
// }
