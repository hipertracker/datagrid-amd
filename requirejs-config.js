var require = {
    waitSeconds: 200,
    baseUrl: './',
    paths: {
        babel: 'vendor/requirejs_babel/browser',
        polyfill: 'vendor/requirejs_babel/polyfill.min',
        es6: 'vendor/requirejs_babel/es6',
        text: 'vendor/text/text',

        react: 'vendor/react/react-with-addons',
        'react-datagrid': 'vendor/react_datagrid/dist/react-datagrid',

        lodash: 'vendor/lodash/lodash.min',

        app: 'app'
    },
    shim: {
        babel: {
            deps: ['polyfill']
        },
        'react-datagrid': {
            deps: ['react']
        }
    }
};

