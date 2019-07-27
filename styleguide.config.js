const glob = require( "glob" );
const path = require( "path" );
const fs = require( "fs" );

function getComponents(folder) {
    if(!folder) {
        folder = '**'
    }

    const files1 = glob.sync('src/components/' + folder + '/*.{ts,tsx}');
    const files2 = glob.sync('src/fragments/' + folder + '/*.{ts,tsx}');
    const files3 = glob.sync('src/primed/' + folder + '/*.{ts,tsx}');
    const files4 = glob.sync('src/templates/' + folder + '/*.{ts,tsx}');

    const files = [].concat(files1, files2, files3, files4);

    // sort based on file name and not path
    files.sort(function(file1, file2) {
        const index1 = file1.lastIndexOf('/');
        const index2 = file2.lastIndexOf('/');
        
        const name1 = file1.substring(index1 + 1);
        const name2 = file2.substring(index2 + 1);

        return name1.localeCompare(name2);
    });

    return files;
};

module.exports = {
    title : 'Bedrock Component Library',
    pagePerSection: true,
    propsParser: require( "react-docgen-typescript" ).parse,
    webpackConfig: Object.assign( {}, require( "./webpack.config" ), {} ),
    styleguideDir: "docs",
    exampleMode: 'expand',
    usageMode: 'expand',
    components : getComponents,
    // sections : [
    //     {
    //         name : 'Assets',
    //         components: getComponents('assets')
    //     },
    //     {
    //         name : 'Buttons',
    //         components: getComponents('button')
    //     },
    //     {
    //         name : 'Cards',
    //         components: getComponents('card')
    //     },
    //     {
    //         name : 'Collections',
    //         components: getComponents('collection')
    //     },
    //     {
    //         name : 'containers',
    //         components: getComponents('containers')
    //     },
    //     {
    //         name : 'Content',
    //         components: getComponents('content')
    //     },
    //     {
    //         name : 'Form',
    //         components: getComponents('form')
    //     },
    //     {
    //         name : 'Layout',
    //         components: getComponents('layout')
    //     },
    //     {
    //         name : 'Navigation',
    //         components: getComponents('nav')
    //     },
    //     {
    //         name : 'Notifications',
    //         components: getComponents('notify')
    //     },
    //     {
    //         name : 'Progress',
    //         components: getComponents('progress')
    //     }
    // ],
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
