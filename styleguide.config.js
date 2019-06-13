const glob = require( "glob" );
const path = require( "path" );
const fs = require( "fs" );

function getComponents() {
    let files = glob.sync('src/components/**/*.{ts,tsx}');

    // sort based on file name and not path
    files.sort(function(file1, file2) {
        let index1 = file1.lastIndexOf('/');
        let index2 = file2.lastIndexOf('/');
        
        let name1 = file1.substring(index1 + 1);
        let name2 = file2.substring(index2 + 1);

        return name1.localeCompare(name2);
    });

    return files;
};

module.exports = {
    components: getComponents,
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
                    href : './assets/bedrock.css'
                },
                {
                    rel : 'stylesheet',
                    href : './assets/bedrock-docs.css'
                }
            ]
        }
    }
};
