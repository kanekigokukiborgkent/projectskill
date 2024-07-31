// vue.config.js


module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('scss')
      .oneOf('normal')
      .use('sass-loader')
      .loader('sass-loader')
      .tap((options) => {
        // Modify the options
        return {
          ...options,
          implementation: require('sass'),
          sassOptions: {
            indentedSyntax: true // optional
          },
        };
      });
  },
};
