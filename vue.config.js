const path = require('path');


module.exports = {
    pluginOptions: {
      i18n: {
        locale: 'pl',
        fallbackLocale: 'pl',
        localeDir: 'locales',
        enableInSFC: true
      },
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
      }
    },
    configureWebpack: {
        module: {
            rules: [{
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', {
                    loader: 'style-resources-loader',
                    options: {
                        patterns: [
                            path.resolve(__dirname, '/scss/_lib.scss'),
                        ]
                    }
                }]
            }]
        }
    },
};
