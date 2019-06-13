const glob = require( "glob" );
const path = require( "path" );
const fs = require( "fs" );

module.exports = {
    components: 'src/components/**/*.{ts,tsx}',
    title : 'Bedrock Component Library',
    pagePerSection: true,
    propsParser: require( "react-docgen-typescript" ).parse,
    webpackConfig: Object.assign( {}, require( "./webpack.config" ), {} ),
    styleguideDir: "docs",
    exampleMode: 'expand',
    usageMode: 'expand',
    template : {
        head : {
            links : [
                {
                    rel : 'stylesheet',
                    href : 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
                },
                {
                    rel : 'stylesheet',
                    href : './assets/bedrock-docs.css'
                }
            ]
        }
    }
};
