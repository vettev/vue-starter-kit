const path = require('path');

module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'pl',
            fallbackLocale: 'pl',
            localeDir: 'locales',
            enableInSFC: false
        },
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [path.resolve(__dirname, 'scss/_lib.scss')]
        }
    }
};
